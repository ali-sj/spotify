import { songs } from "../../components/Songs"
export const trackReducer=(state=songs[0],{type,payload})=>{
    switch(type){
        case 'ADD_TRACK':
            return payload
        case 'NEXT_TRACK':
            return payload 
         case'PREVIOUS_TRACK':
             return payload   
          default:
              return state  
    }

}