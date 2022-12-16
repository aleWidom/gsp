import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './Fonts.module.scss'


export const Fonts = () => {

  const { features, setFeatures } = useContext(GspContext)

  const handleFont = (font: string) => () => {
    setFeatures(
      {
        ...features,
        fontFamily: font
      }
    )
  }


  return (
    <div className={styles.cards}>
      <h2 className={styles.header}>2- Choose Font</h2>
      <div className={styles.containerButtons}>
        <button onClick={handleFont('Arial')} className={features.fontFamily === 'Arial' ? styles.buttonSelected : styles.button} >Arial</button>
        <button onClick={handleFont('Times New Roman')} className={features.fontFamily === 'Times New Roman' ? styles.buttonSelected : styles.button} >Times</button>
        <button onClick={handleFont('Ink Free Regular')} className={features.fontFamily === 'Ink Free Regular' ? styles.buttonSelected : styles.button} >Ink</button>
        <button onClick={handleFont('Courier')} className={features.fontFamily === 'Courier' ? styles.buttonSelected : styles.button} >Courier</button>
        <button onClick={handleFont('Simple Melody Regular')} className={features.fontFamily === 'Simple Melody Regular' ? styles.buttonSelected : styles.button} >Simple</button>
{/*         <button onClick={handleFont('Verdana')} className={features.fontFamily === 'Verdana' ? styles.buttonSelected : styles.button} >Verdana</button> */}
      </div>
    </div>
  )
}

