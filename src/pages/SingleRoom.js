import React from 'react'
import defaultBcg from '../images/details-1.jpeg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends React.Component {
    state = {
        slug: this.props.match.params.slug,
        defaultBcg
    }

    static contextType = RoomContext

    render() {
           
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        console.log(this.state.slug) 
        if (!room) {
            return ( 
                <div className="error">
                <h3>no such room could be found :/</h3>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                </Link>
                </div>
            )
        }

        return (
            <>
                <StyledHero img={room.images[0]}>
                    <Banner title={`${room.name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room ">
                    <div className="single-room-images">
                        {room.images.map((item,index) => {
                            return <img key={index} src={item} alt={room.name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article>
                            <h3>details</h3>
                            <p>{room.description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${room.price}</h6>
                            <h6>size: ${room.size}</h6>
                            <h6>max capacity : {
                            room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person`}</h6>
                            <h6>{room.pets ? "pets allowed" : "no pets are allowed"}</h6>
                            <h6>{room.breakfast && "free breakfast included"}</h6>
                        </article>
                    </div> 
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {room.extras.map((item,index) => {
                            return <li key={index}>->  {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
