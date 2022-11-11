import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'

export const Price = () => {

  const { price } = useContext(GspContext)

  return (
    <h4>${price}</h4>
  )
}
