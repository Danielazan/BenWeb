import { NewsContext} from '../Context/NewsContext'
import {useContext} from 'react'

export const useNewsContext =()=>{
    const context = useContext(NewsContext)

    if(!context){
        throw Error("useNewsContext must be in NewsContext Provider")
    }

    return context
}