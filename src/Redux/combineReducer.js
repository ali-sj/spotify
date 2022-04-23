import { combineReducers } from "redux";
import { muteReducer } from "./Reducers/muteReducer";
import { songsListReducer } from "./Reducers/songsListReducer";
import { trackReducer } from "./Reducers/trackReducer";
import { volumeReducer } from "./Reducers/volumeReducer";
export const reducer=combineReducers({
    track:trackReducer,
    volume:volumeReducer,
    songsList:songsListReducer,
    muted:muteReducer

})