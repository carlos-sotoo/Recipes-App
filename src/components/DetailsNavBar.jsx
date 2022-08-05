import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import '../styles/components/details-navbar.scss'

const DetailsNavBar = ({ icon, name, path, children, handleClick, navbar }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
  }, [navbar])

  const handleVisibleCLick = () => {
    setVisible(prev => !prev)
  }

  return (
    <div className={`details-nav-bar ${visible && 'active'}`} >
      <div className='details-visible' onClick={handleVisibleCLick}>
        <Link to={`/${path}`} className='link' onClick={handleClick}>{icon} <span>{name}</span></Link>
        <span className={`icon ${visible && 'active'}`}></span>
      </div>
      <div className='details-panel'>
        {children}
      </div>
    </div >
  )
}

export default DetailsNavBar
