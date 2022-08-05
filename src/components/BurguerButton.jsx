import '../styles/components/burguer-button.scss'

const BurguerButton = ({ clicked, handleClick }) => {
  return (
    <div className='burguer-button' onClick={handleClick}>
      <div className={`cta ${clicked && 'active'}`} >
        <div className='toggle-btn type15'></div>
      </div>
    </div>
  )
}

export default BurguerButton
