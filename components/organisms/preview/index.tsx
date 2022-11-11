import { useContext } from "react"
import { GspContext } from '../../../context'
import { TextExample } from "../../atoms"
import { OptionsBackground } from "../../molecules"
import styles from './Preview.module.scss'


export const Preview = () => {

  const {background} = useContext(GspContext)

  const backgroundImgPreview = {
    'backgroundImage': `url(${background})`
  }

  return (
    <div className={styles.containerPreview} style={backgroundImgPreview}>
      <TextExample />
      <OptionsBackground/>
    </div>
  )
}


