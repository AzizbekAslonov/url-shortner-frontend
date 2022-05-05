import React from 'react'

export const LinkCard = ({ link }) => (
  link && <div className='mt-3 mt-md-5'>
    <h2 className='display-3 mb-4'>Havola</h2>

    <div className="app-text">
      <p>Qisqartirilgan: <a href={link.shortLink} target="_blank" rel="noopener noreferrer">{link.shortLink}</a></p>
      <p>Qayerdan: <a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></p>
      <p>Kirishlar soni: <strong>{link.clicks}</strong></p>
      <p>Qachondan: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </div>
  </div>
)