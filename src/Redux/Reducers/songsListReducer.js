
export const songsListReducer=(state=[],{type,payload})=>{
    switch(type){
        case'SONGS_LIST':
        return payload
        case 'FAVORITE_SONG':
            const selected=state.find(song=>song.id===payload)

            const favoriteSongsList=state.map(song=>{return song.id===selected.id?{...selected,favorite:!selected.favorite}:song})
            return favoriteSongsList
       default:
           return state 
    }

}