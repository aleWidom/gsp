import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './Colors.module.scss'

export const Colors = () => {

    const { features, setFeatures } = useContext(GspContext)

    const handleColor = (color: string) => (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setFeatures(
            {
                ...features,
                color: color
            }
        )
    }

    
    const buttons:string[] = [
        'white', 'palegoldenrod', 'yellow', 'orangered', 'red', 'fuchsia', 'purple', 'blue', 'cyan', 'green', 'lightblue'
    ] 


    return (
        <div className={styles.cards}>
            <h2 className={styles.header}>3- Color: <small className={styles.colorSelected}>{features.color}</small></h2>
            <div className={styles.containerButtons}>
                {buttons.map((color) => (
                    color === 'white' ? 
                    <button onClick={handleColor(color)}  className={features.color === color ? styles.buttonSelected : styles.buttonWhite} style={{backgroundColor:color}} key={color}></button> :
                    <button onClick={handleColor(color)}  className={features.color === color ? styles.buttonSelected : styles.button} style={{backgroundColor:color}} key={color}></button>

                ))}
            </div>
        </div>
    )
}
