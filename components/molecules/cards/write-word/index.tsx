import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './WriteWord.module.scss'


export const WriteWord = () => {

    const { value, setValueInput } = useContext(GspContext)

    const handleWord = (e) => {
        setValueInput([
            e.target.value
        ])
    }

     const handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter')
             setValueInput([
                ...value,
                
            ]
            ) 
        }
    }
 





    return (
        <>
            <h2 className={styles.header}>1 Text</h2>
            <p className={styles.label}>What would you like your neon to say?</p>
            <textarea type={'text'} onChange={handleWord}  onKeyPress={handleEnter} value={value} className={styles.textarea} placeholder='Enter your text here'></textarea>
        </>
    )
}
