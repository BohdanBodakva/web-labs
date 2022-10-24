import { createContext } from 'react'
import { isAuthentificated } from './AuthData'


export const GemsContext = createContext({});
export { isAuthentificated };