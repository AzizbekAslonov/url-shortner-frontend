import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { LinksList } from '../components/LinksList'
import { Loader } from '../components/Loader'

export const LinksPage = () => {
  const { token } = useContext(AuthContext)
  const [links, setLinks] = useState([])
  const { request, loading } = useHttp()

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/url', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLinks(fetched)
    } catch (e) { }
  }, [request, token])

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])
  return (
    loading ? <Loader /> : <LinksList links={links} />
  )
}
