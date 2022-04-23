export const muteAction=()=>(dispatch,getState)=>{
    console.log(getState().muted);
    dispatch({type:'MUTE_TRACK',payload:!getState().muted})

}