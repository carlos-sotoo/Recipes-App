import { useEffect, useState } from 'react'
import { IoEggSharp, IoFastFoodOutline, IoFishSharp, IoPizzaSharp } from 'react-icons/io5'
import '../styles/components/spinner.scss'

const Spinner = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count <= 2 ? count + 1 : 0)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='spinner'>
      {
        {
          0: <IoFastFoodOutline />,
          1: <IoEggSharp />,
          2: <IoFishSharp />,
          3: <IoPizzaSharp />
        }[count]
      }

    </div>
  )
}

export default Spinner
