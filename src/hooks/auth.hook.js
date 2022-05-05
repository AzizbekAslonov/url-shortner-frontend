import { useState, useCallback, useEffect } from 'react'
import { useHttp } from './http.hook'

export const useAuth = () => {
   const [token, setToken] = useState(null)
   const [user, setUser] = useState(null)
   const [ready, setReady] = useState(false)
   const { request } = useHttp()

   const login = useCallback((jwtToken, userData) => {
      setToken(jwtToken)
      setUser(userData)

      localStorage.setItem('token', jwtToken)
   }, [])

   const logout = useCallback(() => {
      setToken(null)
      setUser(null)

      localStorage.removeItem('token')
   }, [])

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const token = localStorage.getItem('token')
            if (token) {
               const data = await request('/user/check', 'GET', null, {
                  Authorization: `Bearer ${token}`
               })
               login(data.token, data.user)
            }
            setReady(true)
         } catch (error) {
            setReady(true)
         }
      }
      checkAuth()
   }, [login])

   return { login, logout, token, user, ready }
}