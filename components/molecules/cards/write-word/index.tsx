import React, { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'
import styles from './WriteWord.module.scss'


export const WriteWord = () => {

    const {value, setValueInput } = useContext(GspContext)

    const handleWord = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueInput([
            e.target.value
        ])
    }

    return (
        <div className={styles.cardContainer}>
            <p className={styles.header}>1- What would you like to say?</p>
            <textarea onChange={handleWord} value={value} className={styles.textarea} placeholder='Enter your text here'></textarea>
        </div>
    )
}
