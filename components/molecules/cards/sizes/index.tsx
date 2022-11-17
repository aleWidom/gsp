import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './Sizes.module.scss'

export const Sizes = () => {

    const { features, setFeatures, setPrice } = useContext(GspContext)

    const handleSize = (size: string) => () => {
        if (size === '44px') {
            setPrice('2558')
        } else if (size === '66px') {
            setPrice('4756')
        } else if (size === '88px') {
            setPrice('6525')
        }
        setFeatures(
            {
                ...features,
                fontSize: size
            }
        )
    }

    return (
        <div className={styles.cards}>
            <h2 className={styles.header}>4- Select Size</h2>
            <div className={styles.containerButtons}>
                <button onClick={handleSize('44px')}  className={features.fontSize === '44px' ? styles.buttonSelected : styles.button}>
                    <p className={styles.buttonHeader}>Small</p>
                    <small>(84x106cm)</small>
                </button>
                <button onClick={handleSize('66px')}   className={features.fontSize === '66px' ? styles.buttonSelected : styles.button}>
                    <p className={styles.buttonHeader}>Medium</p>
                    <small>(167x213cm)</small>
                </button>
                <button onClick={handleSize('88px')}   className={features.fontSize === '88px' ? styles.buttonSelected : styles.button}>
                    <p className={styles.buttonHeader}>Large</p>
                    <small>(251x319cm)</small>
                </button>
            </div>
        </div>
    )
}
