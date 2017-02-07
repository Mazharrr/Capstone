import store from './store'
import MechaKoopa from './class/mechaKoopa'
import {getPlayers, getClient} from './reducers/players'
import {loadLobby} from './reducers/lobby'
import {removeBomb, addBomb, addFlames, removeCrate, addPaint, addPowerUp, removePaint, removePowerUp} from './reducers/Tiles'
import game from './states/stateManager'
import socket from './socket'
import {powerGroup, crate, fire, paint} from './states/game'

export default socket =>{
let me = socket.id
  socket.on('gameState', data=>{

    store.dispatch(getPlayers(data.Players.players))
    store.dispatch(getClient(data.Players.sockets))
    store.dispatch(loadLobby(data.Lobby.lobby))
  })
  socket.on('server_send_bomb', data =>{
    if(me!=data.socket){
      let newBomb= new MechaKoopa(game, data.x,data.y,data.range)
      newBomb.sprite.animations.play('explodeLeft')
      store.dispatch(addBomb(data.gridX,data.gridY, newBomb))
    }
  })
  socket.on('server_bomb_explode', data=>{
    if(me!==data.socket){
    store.dispatch(removeBomb(data.x, data.y))
  }
  })
  socket.on('server_make_fire', data=>{
    if(me!==data.socket){
      let newFlame = fire.create(data.x, data.y, 'fire')
      newFlame.scale.setTo(1.2,1.2)
      newFlame.anchor.setTo(0.5,0.5)
      store.dispatch(addFlames(data.gridX, data.gridY, newFlame))
  }
  })
  socket.on('server_remove_crate', data=>{
    if(me!==data.socket){
    store.getState().Tiles.crates[data.x][data.y].crate.kill()
    store.dispatch(removeCrate(data.x, data.y))
  }
  })
  socket.on('server_make_paint', data=>{
    if(me!==data.socket){
      let newPaint = paint.create(data.x, data.y, data.color)
      newPaint.scale.setTo(0.15,0.15)
      newPaint.anchor.setTo(0.5,0.5)
      store.dispatch(addPaint(data.gridX, data.gridY, newPaint))
  }
  })
  socket.on('server_make_power', data=>{
    if(me!==data.socket){
      console.log(data)
      let newPower = powerGroup.create(data.x, data.y, data.power)
      console.log(newPower)
      newPower.scale.setTo(1.3,1.3)
      newPower.anchor.setTo(0.5,0.5)
      newPower.gridCords= {x: data.gridX, y: data.gridY}
      store.dispatch(addPowerUp(data.gridX, data.gridY, newPower))
      game.world.bringToTop(powerGroup)
  }
  })
  socket.on('server_remove_paint', data=>{
    if(me!==data.socket){
    store.dispatch(removePaint(data.color))
  }
  })
  socket.on('server_get_power', data=>{
    if(me!==data.socket){

    store.dispatch(removePowerUp(data.x, data.y))
  }
  })
}