import { useContext } from "react"
import { GspContext } from "../../../context/gsp/GspContext"
import styles from './TextExample.module.scss'


export const TextExample = () => {

  const { features, value } = useContext(GspContext)

  return (
    <div className={styles.text} style={features}>
      {value.map((e) => (
        <div key={e}>
          <span>{e}</span>
          <br />
        </div>
      ))}
      <br />
    </div>
  )
}
