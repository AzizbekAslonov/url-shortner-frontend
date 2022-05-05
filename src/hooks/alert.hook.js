import { useState, useCallback } from 'react'

export const useAlert = () => {
    const [alert, setAlert] = useState({ visible: false, type: null, text: null })

    const show = useCallback((text, type = 'danger') => {
        setAlert({ text, type, visible: true })
    }, [])
    const hide = useCallback(() => {
        setAlert(prev => {
            return { ...prev, visible: false }
        })
    }, [])

    return { show, hide, alert }
}