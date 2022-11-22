
import { useContext, useEffect } from 'react';
import { GspContext } from "../../../context/gsp/GspContext"
import useResponsive from '../../../hooks/useResponsive';


export const TextExample = () => {

  const { features, setFeatures, value } = useContext(GspContext)

  const { isDesktop } = useResponsive();
  
  useEffect(() => {
    if (isDesktop) {
      setFeatures(
        {
          ...features,
          fontSize: '75px'
        }
      )
    } else {
      setFeatures(
        {
          ...features,
          fontSize: '16px'
        }
      )
    }
  }, [isDesktop])
  

  return (
    <div style={features}>
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
