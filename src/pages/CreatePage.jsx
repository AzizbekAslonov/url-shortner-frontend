import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { AlertContext } from '../context/AlertContext'

export const CreatePage = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const [link, setLink] = useState('')
  const { request, error, clearError, loading } = useHttp()
  const alert = useContext(AlertContext)

  useEffect(() => {
    error && alert.show(error)
    clearError()
  }, [error, clearError, alert.show])

  const pressHandler = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await request('/url', 'POST', { link }, {
          Authorization: `Bearer ${auth.token}`
        })
        alert.show("Havola saqlandi", 'success')
        history.push(`/detail/${data.id}`)
      } catch (error) { }
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: 25 }}>
        <div className="input-field">
          <div className="form-floating mb-3">
            <input
              id="link"
              type="text"
              className="form-control create-input"
              placeholder="name@example.com"
              value={link}
              disabled={loading}
              onChange={e => setLink(e.target.value)}
              onKeyPress={pressHandler}
            />
            <label className='create-label' htmlFor="link">Havolani kiriting:</label>
          </div>
        </div>
      </div>
    </div>
  )
}