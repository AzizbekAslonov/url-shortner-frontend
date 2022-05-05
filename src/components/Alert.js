import React, { useContext } from 'react'
import { AlertContext } from '../context/AlertContext'

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    if (!alert.visible || !alert.text) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>Xabar: </strong>{alert.text}
            <button onClick={hide} type="button" className="btn-close" />
        </div>
    )
}