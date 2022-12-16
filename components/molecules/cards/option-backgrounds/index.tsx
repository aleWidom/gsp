
import { useContext } from 'react'
import Image from 'next/image'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './OptionBackground.module.scss'

export const OptionsBackground = () => {

  const { background, setBackground } = useContext(GspContext)

  const handleBackground = (src:string) => () => {
    setBackground(src)
  }

  /* const handleBackgroundLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
      const files = e.target.files
      const fileRef = files[0] || ""
      const fileType: string= fileRef.type || ""
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload=(ev: any) => {
        setBackground(`data:${fileType};base64,${btoa(ev.target.result)}`)
        }
      }
    } */

  return (
      <div className={styles.containerImgs}>
     {/*    <div>
        <p>+dadadadadad</p>    
        <input type={'file'} onChange={handleBackgroundLocal}/>  
        </div> */}
        <Image src='https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_brick_new.png?v=1666069694' alt='carrousel' width='50' height='50' className={styles.imgs} onClick={handleBackground('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_brick_new.png?v=1666069694')} />
        <Image src='https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB_Stage_main.png?v=1662486660' alt='carrousel' width='50' height='50' className={styles.imgs} onClick={handleBackground('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB_Stage_main.png?v=1662486660')} />
        <Image src='https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_kids_new.png?v=1665984170' alt='carrousel' width='50' height='50' className={styles.imgs} onClick={handleBackground('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_kids_new.png?v=1665984170')} />
      </div>
  )
}
