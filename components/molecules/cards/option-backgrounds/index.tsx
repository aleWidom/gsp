
import { useContext } from 'react'
import Image from 'next/image'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './OptionBackground.module.scss'

export const OptionsBackground = () => {

  const { setBackground } = useContext(GspContext)

  const handleBackground = (src:string) => () => {
    setBackground(src)
  }

  return (
      <div className={styles.containerImgs}>
        <Image src='https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_brick_new.png?v=1666069694' alt='carrousel' width='50' height='50' className={styles.imgs} onClick={handleBackground('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_brick_new.png?v=1666069694')} />
        <Image src='https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB_Stage_main.png?v=1662486660' alt='carrousel' width='50' height='50' className={styles.imgs} onClick={handleBackground('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB_Stage_main.png?v=1662486660')} />
        <Image src='https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_kids_new.png?v=1665984170' alt='carrousel' width='50' height='50' className={styles.imgs} onClick={handleBackground('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_kids_new.png?v=1665984170')} />
      </div>
  )
}
