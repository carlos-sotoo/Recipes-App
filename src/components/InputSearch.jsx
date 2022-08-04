import { useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'

import '../styles/components/input-text.scss'

const InputSearch = ({ text, handleSearch }) => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    handleSearch(input)
  }

  return (
    <div className='input'>
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
    </div>
  )
}

export default InputSearch
