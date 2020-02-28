import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services:[
            {
            icon: <FaCocktail/>, 
            title: "Free Cocktails",
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sunt sint maiores omnis distinctio sed ea nihil minus, corporis harum dolores at voluptatibus et perspiciatis iure ducimus cupiditate quidem vitae!'
            },
            {
            icon: <FaHiking/>, 
            title: "Endless Hikinh",
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sunt sint maiores omnis distinctio sed ea nihil minus, corporis harum dolores at voluptatibus et perspiciatis iure ducimus cupiditate quidem vitae!'
            },
            {
            icon: <FaShuttleVan/>, 
            title: "Free Transporation",
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sunt sint maiores omnis distinctio sed ea nihil minus, corporis harum dolores at voluptatibus et perspiciatis iure ducimus cupiditate quidem vitae!'
            },
            {
            icon: <FaBeer/>, 
            title: "Strongest Beer",
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sunt sint maiores omnis distinctio sed ea nihil minus, corporis harum dolores at voluptatibus et perspiciatis iure ducimus cupiditate quidem vitae!'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return ( 
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>                  
            </section>
        )
    }
}
