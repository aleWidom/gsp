
import React, { useState } from 'react';
import { GspContext } from './GspContext';
import {Features} from '../../interfaces/interfaces'



interface Props {
    children: JSX.Element | JSX.Element[]
}



export const GspProvider = ({ children}: Props) => {

    const [background, setBackground] = useState<string>('https://cdn.shopify.com/s/files/1/0361/0781/3004/files/CB-BG-image_brick_new.png?v=1666069694')

    const [value, setValueInput] = useState<string[]>(['Start'])

    const [price, setPrice] = useState<string>('6458')

    const [features, setFeatures] = useState<Features>(
        {
            color: 'white',
            fontFamily: 'Arial'
        }
    )

    return (
        <GspContext.Provider value={{
            background,
            setBackground,
            value,
            setValueInput,
            price,
            setPrice,
            features,
            setFeatures
        }}>
            {children}
        </GspContext.Provider>
    )
}



