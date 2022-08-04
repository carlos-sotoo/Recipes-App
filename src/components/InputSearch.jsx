import { useEffect, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

import '../styles/components/input-text.scss'

const InputSearch = ({ text, handleSearch }) => {
  const [input, setInput] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (!location.pathname.includes('recipes')) setInput('')
  }, [location])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(input)
  }

  return (
    <form className='input'>
      <div className='input-text'>
        <input
          type='text'
          name={text}
          value={input}
          onChange={handleChange}
          required
        />
        <label htmlFor={text}>{text}</label>
      </div>

      <button onClick={handleSubmit}>
        <AiOutlineSearch className='icon' />
      </button>
    </form>
  )
}

export default InputSearch
