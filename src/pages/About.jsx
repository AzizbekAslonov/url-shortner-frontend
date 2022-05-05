import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

export const AboutPage = () => {
    const [details, setDetails] = useState(null)
    const { request } = useHttp()

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const fetched = await request('/user/details', 'GET', null, {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                })
                setDetails(fetched)
            } catch (e) { }
        }
        fetchDetails()
    }, [])

    return (
        <div className="container">
            <div className="py-5">
                <h3 className="mb-3">Havolalar soni: {details?.refs || 0} ta</h3>
                <h3 className="mb-3">Umumiy ko'rishlar soni: {details?.clicks || 0} ta</h3>
                <hr className="my-5" />
                <div className="mb-5">
                    <h1 className="display-5 mb-0">
                        References Application by<a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://t.me/AzizbekAslonov"><i> Azizbek</i></a>
                    </h1>
                    <p className="text-muted">version 1.0.0</p>
                </div>
                <div className="app-text mb-5">
                    Uzundan uzun havolalar bilan ishlash uchun qulay web-dastur
                    <br />
                    <ul>
                        <li><Link style={{ textDecoration: 'none' }} to='/create'> Havolalarni qisqartirish uchun</Link></li>
                        <li><Link style={{ textDecoration: 'none' }} to='/links'> Qisqartirilgan havolalar ro'yxati </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}