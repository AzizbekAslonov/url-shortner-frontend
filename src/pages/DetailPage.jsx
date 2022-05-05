import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { LinkCard } from '../components/LinkCard'
import { AlertContext } from '../context/AlertContext'

export const DetailPage = () => {
    const [linkData, setLinkData] = useState(null)
    const { id } = useParams()
    const { request, loading, error, clearError } = useHttp()
    const { token } = useContext(AuthContext)
    const alert = useContext(AlertContext)

    useEffect(() => {
        const fetchLink = async () => {
            try {
                const fetched = await request(`/url/${id}`, 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                setLinkData(fetched)
            } catch (e) { }
        }
        fetchLink()
    }, [])

    useEffect(() => {
        error && alert.show(error)
        clearError()
    }, [error, clearError, alert.show])

    return (
        loading ? <Loader /> : <LinkCard link={linkData} />
    )
}