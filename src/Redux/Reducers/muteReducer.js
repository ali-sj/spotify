export const muteReducer=(state=false,{type,payload})=>{
    switch(type){
        case 'MUTE_TRACK':
            return payload
        default:
            return state    
    }
}