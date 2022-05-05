import React from 'react'
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {
  return (
    <div className='mt-4 mt-md-5'>
      {links.length ? (
        <div className='table-responsive'>
          <table className="table app-text">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Qayerdan</th>
                <th scope="col">Qisqartirilgan</th>
                <th scope="col">Ma'lumot</th>
              </tr>
            </thead>
            <tbody>
              {links.map((link, index) => {
                return (
                  <tr key={link.id}>
                    <td>{index + 1}</td>
                    <td>{link.link.length > 30 ? `${link.link.slice(0, 30)}...` : link.link}</td>
                    <td>{link.shortLink}</td>
                    <td>
                      <Link className='link-primary' to={`/detail/${link.id}`}>Ochish</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : <p className="text-center">Havolalar mavjud emas!</p>}
    </div>
  )
}