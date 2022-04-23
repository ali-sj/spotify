export const volumeReducer=(state=100,{type,payload})=>{
    switch(type){
        case'VOLUME':
            return payload
        default:
            return state
    }


}