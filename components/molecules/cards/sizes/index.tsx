import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import useResponsive from '../../../../hooks/useResponsive';
import styles from './Sizes.module.scss'

export const Sizes = () => {

    const { features, setFeatures, setPrice } = useContext(GspContext)

    const { isDesktop } = useResponsive();

    const handleSize = (size: string, fontSize: string) => () => {
        if (size === 'small') {
            setPrice('6458')
        } else if (size === 'medium') {
            setPrice('10425')
        } else if (size === 'large') {
            setPrice('12749')
        }
        setFeatures(
            {
                ...features,
                fontSize
            }
        )
    }

    return (
        <div className={styles.cards}>
            <h2 className={styles.header}>4- Select Size</h2>
            <div className={styles.containerButtons}>
                {isDesktop ?
                    <>
                        <button onClick={handleSize('small', '75px')}  className={features.fontSize === '75px' ? styles.buttonSelected : styles.button}>
                            <p className={styles.buttonHeader}>Small</p>
                            <small>(84x106cm)</small>
                        </button>
                        <button onClick={handleSize('medium', '80px')} className={features.fontSize === '80px' ? styles.buttonSelected : styles.button}>
                            <p className={styles.buttonHeader}>Medium</p>
                            <small>(167x213cm)</small>
                        </button>
                        <button onClick={handleSize('large', '82px')} className={features.fontSize === '82px' ? styles.buttonSelected : styles.button}>
                            <p className={styles.buttonHeader}>Large</p>
                            <small>(251x319cm)</small>
                        </button>
                    </> :
                    <>
                        <button onClick={handleSize('small', '16px') } className={features.fontSize === '16px' ? styles.buttonSelected : styles.button}>
                            <p className={styles.buttonHeader}>Small</p>
                            <small>(84x106cm)</small>
                        </button>
                        <button onClick={handleSize('medium', '21px')} className={features.fontSize === '21px' ? styles.buttonSelected : styles.button}>
                            <p className={styles.buttonHeader}>Medium</p>
                            <small>(167x213cm)</small>
                        </button>
                        <button onClick={handleSize('large', '26px')} className={features.fontSize === '26px' ? styles.buttonSelected : styles.button}>
                            <p className={styles.buttonHeader}>Large</p>
                            <small>(251x319cm)</small>
                        </button></>}
            </div>
        </div>
    )
}
