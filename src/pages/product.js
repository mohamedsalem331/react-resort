import React from 'react'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'

export default class soso extends React.Component {
    state = {
        name: this.props.match.params.name,
    }

    static contextType = RoomContext

    render() {
        const {getRoomName} = this.context
        const room = getRoomName(this.state.name)   

        if (!room) {
            return ( 
                <div>
                no rooms
                </div>
            )
        }

        return (
            <>
             <div>This is name page you have succeded</div>
             <p>{room.name}</p>
            </>
        )
    }
}