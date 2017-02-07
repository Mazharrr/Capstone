import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import {hashHistory} from 'react-router'
import {makeRoom, joinRoom, leaveRoom} from '../reducers/Lobby'

import 'pixi';
import 'p2';
import 'phaser';
import {initializeSocket} from '../socket'
import game from '../states/stateManager'

initializeSocket();

const Lobby = (props)=>{

    let multiple=  false
    props.Lobby.lobby.forEach((room)=>{
      if(room.players.includes(props.Player.name))
      multiple = true
    })




  return(
    <div>

      <button onClick={()=>props.makeRoom(props.Player.name)} disabled={multiple}>Make a room </button>
      <h1>Room count: {props.Lobby.lobby && props.Lobby.lobby.length}</h1>

    <h3>Rooms</h3>
      {
        props.Lobby.lobby && props.Lobby.lobby.map(room => (
          <div key= { room.id}>
            <h1>Room {room.id}</h1>
             {
               room.players.map((player, index )=>

                 <div key = {index}>
                   <h3>
                      Player {index+1} - {player}
                   </h3>

                 </div>
               )
             }
             {
               (room.players && room.players.length>=1 && room.players.includes(props.Player.name))
               ? <button onClick={()=>{
                 var myGame = new game()
                 hashHistory.push('/game')
               }


               }>Start Game</button>
                : <button  disabled = {multiple} onClick ={()=>props.joinRoom(room.id, props.Player.name)}>Join Room
                </button>
             }
             {(room.players.includes(props.Player.name))
               ?
               <button onClick={()=>props.leaveRoom(room.id, props.Player.name)}>Leave Room</button>
               :<div></div>
             }
             <hr></hr>
          </div>
        ))
      }
    </div>



  )

}


const mapStateToProps = (state) => ({
Lobby: state.Lobby, Player: state.Player})

const mapDispatchToProps = (dispatch) => ({
  makeRoom: (playerName) => dispatch(makeRoom(playerName)),
  joinRoom: (roomId, playerName) => dispatch(joinRoom(roomId, playerName)),
  leaveRoom: (roomId, name) => dispatch(leaveRoom(roomId,name))
})


export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
