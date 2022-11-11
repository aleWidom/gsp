import { WriteWord, Fonts, Colors, Sizes, Price} from '../../molecules'
import styles from './Customize.module.scss'

export const Customize = () => {
  return (
    <>
      <h2 className={styles.title}>Customize</h2>
      <WriteWord />
      <Fonts/>
      <Colors/>
      <Sizes/>
      <Price/>
    </>
  )
}

