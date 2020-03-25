import React from 'react'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'

export default class soso extends React.Component {
    state = {
        id: this.props.match.params.id,
    }

    static contextType = RoomContext

    render() {
        const {getRoomID} = this.context
        const room = getRoomID(this.state.id)   
        console.log(this.state.id)

        if (!room) {
            return ( 
                <div>
                no rooms
                </div>
            )
        }

        return (
            <>
             <div>This is id page you have succeded</div>
             <p>{room.id}</p>
            </>
        )
    }
}