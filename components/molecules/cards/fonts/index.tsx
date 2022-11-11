import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './Fonts.module.scss'


export const Fonts = () => {

    const { features, setFeatures } = useContext(GspContext)

    const handleFont = (font:string) => () => {
        setFeatures(
          {
            ...features,
            fontFamily: font
          }
        )
      }


    return (
        <>
            <h2 className={styles.header}>2 Choose Font</h2>
            <button onClick={handleFont('Arial')} className={styles.button} >Arial</button>
            <button onClick={handleFont('Times New Roman')}>Times</button>
            <button onClick={handleFont('Verdana')}>Verdana</button>
        </>
    )
}

