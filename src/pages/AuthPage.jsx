import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { AlertContext } from '../context/AlertContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const alert = useContext(AlertContext)
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({ email: '', password: '' })

  useEffect(() => {
    error && alert.show(error)
    clearError()
  }, [error, clearError, alert.show])

  const registerHandler = async () => {
    try {
      const data = await request('/user/register', 'POST', { ...form })
      auth.login(data.token, data.user.id)
      alert.show("Ro'yxatdan muvaffaqiyatli o'tildi", 'success')
    } catch (error) { }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/user/login', 'POST', { ...form })
      auth.login(data.token, data.user)
      alert.show("Tizimga muvaffaqiyatli kirildi", 'success')
    } catch (error) { }
  }

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="fullscreen">
      <div style={{ width: 600 }} className='auth'>
        <div className="card pt-2">
          <div className="card-body">
            <h3 className="display-6 text-center mb-5">Autorizatsiya</h3>
            <div className="mb-3">
              <label className='form-label' htmlFor="email">Email</label>
              <input required
                id="email"
                type="email"
                autoComplete='0'
                name="email"
                className="form-control"
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label className='form-label' htmlFor="password">Parol</label>
              <input required
                id="password"
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="card-body">
            <button
              className="btn btn-primary me-2"
              disabled={loading}
              onClick={loginHandler}
            >Kirish
            </button>
            <button
              className="btn btn-secondary"
              onClick={registerHandler}
              disabled={loading}
            >Registratsiya
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}