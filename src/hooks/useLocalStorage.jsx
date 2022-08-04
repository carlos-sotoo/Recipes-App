import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value = {}) => {
    try {
      const values = storedValue.filter(val => val?.id !== value.id)
      const array = [value].concat(values)
      array.length = 8
      window.localStorage.setItem(key, JSON.stringify(array))
    } catch (err) {
      setStoredValue(value)
    }
  }

  return { storedValue, setValue }
}
