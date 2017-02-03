import {combineReducers} from 'redux'
import Classes from './Classes'
import Player from './Player'

export default combineReducers({
  Classes: Classes,
  Player: Player
})
