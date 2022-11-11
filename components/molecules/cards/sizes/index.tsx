import { useContext } from 'react'
import { GspContext } from '../../../../context/gsp/GspContext'

export const Sizes = () => {

    const { features, setFeatures, setPrice } = useContext(GspContext)

    const handleSize = (size:string) => () => {
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
        <>
            <h2 className={'headerFont'}>4 Select Size</h2>
            <button onClick={handleSize('44px')} className={'size'}>
                <p>Small</p>
                <small>(84x106cm)</small>
            </button>
            <button onClick={handleSize('66px')} className={'size'}>
                <p>Medium</p>
                <small>(167x213cm)</small>
            </button>
            <button onClick={handleSize('88px')} className={'size'}>
                <p>Large</p>
                <small>(251x319cm)</small>
            </button>
        </>
    )
}
