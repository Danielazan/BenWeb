import { createContext, useReducer} from 'react'

export const NewsContext = createContext()

export const NewsReducer = (state, action)=>{
        switch(action.type){
            case "SET NEWS":
                return{
                    News:action.payload
                }

            case "CREATE NEWS":
                return{
                    News:[action.payload, ...state.News]
                }

            case "DELETE NEWS":
                return{
                    News: state.News.filter((N)=> N._id !==action.payload._id)
                }

            default:
                return state
        }
}

export const NewsContextProvider= ({children})=>{
    const [state, dispatch]= useReducer(NewsReducer, {News:null})
    return(
        <NewsContext.Provider value={{...state,dispatch}}>
            {children}
        </NewsContext.Provider>
    )
}