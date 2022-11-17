import { createContext } from 'react';
import { Features } from '../../interfaces';

interface ContextProps {
    features: Features,
    setFeatures: (description: Features ) => void,
    value: string[],
    background: String,
    setBackground: (description: string) => void,
    setValueInput: (description: string[]) => void,
    price: string,
    setPrice: (price: string) => void,
}

export const GspContext = createContext({} as ContextProps); 




