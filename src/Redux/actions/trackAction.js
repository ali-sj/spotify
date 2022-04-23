import { songs } from "../../components/Songs"
export const trackAction=(id)=>{
    console.log(id);
    const track=songs.find(song=>{return song.id===id})
    return{type:'ADD_TRACK',payload:track}
}
export const nextTrackAction=(id)=>{
    let idd=id
    if(id==songs.length){
    idd=0
    }else{
        idd=id
    }
    const nextTrack=songs.find(song=>{return song.id===idd+1})
    return{type:'NEXT_TRACK',payload:nextTrack}

}
export const previousTrackAction=(id)=>{
    let idd=id
    if(id==1){
    idd=songs.length+1
    }else{
        idd=id
    }
    const previousTrack=songs.find(song=>{return song.id===idd-1})
    return{type:'PREVIOUS_TRACK',payload:previousTrack}

}