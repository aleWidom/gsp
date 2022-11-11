import { createContext } from 'react';
import { Features } from '../../interfaces';

interface ContextProps {
    features: Features,
    setFeatures: (description: Features ) => void,
    value: [],
    background: String,
    setBackground: (description: string) => void,
    setValueInput: (description: []) => void,
    price: string,
    setPrice: (price: string) => void,
}

export const GspContext = createContext({} as ContextProps); 




