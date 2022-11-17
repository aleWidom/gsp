import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './Price.module.scss'

export const Price = () => {

  const { price } = useContext(GspContext)

  return (
    <div className={styles.containerPrice}>
      <h4 className={styles.price}>${price}</h4>
      <button className={styles.add}>Add to Cart</button>
    </div>
  )
}
