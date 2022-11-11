import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './Colors.module.scss'

export const Colors = () => {

    const { features, setFeatures } = useContext(GspContext)

    const handleColor = (color:string) => (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setFeatures(
            {
                ...features,
                color: color
            }
        )
    }

    return (
        <>
            <h2>3 Color</h2>
            <p>Color: {features.color}</p>
            <button onClick={handleColor('red')} className={styles.red}></button>
            <button onClick={handleColor('green')} className={styles.red}></button>
            <button onClick={handleColor('blue')} className={styles.red}></button>
        </>
    )
}
