import { useCallback } from 'react'

export const useMessage = () => {
   return useCallback((msg, classes = 'green darken-3') => {
      if (window.M && msg) {
         window.M.toast({ html: msg, classes })
      }
   }, [])
}