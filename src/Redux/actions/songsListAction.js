import { songs } from "../../components/Songs"
export const songsListAction=()=>{
    return{type:'SONGS_LIST',payload:songs}
}
export const favoriteSongsList=(id)=>{
return{type:'FAVORITE_SONG',payload:id}
    

}
