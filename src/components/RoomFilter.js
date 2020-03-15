import React, { Component } from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'



export default class RoomFilter extends Component {
    static contextType = RoomContext 

    render() {
        const filter = this.context
  
        return (
            <>
                <section className="filter-container">f
                    <Title title="searh rooms" />
                    <form className="filter-form">
                            <div className="form-group">
                                <label htmlFor="type">room type</label>
                                <select name="type" id="type" value={filter.type} className="form-control" onChange={filter.handleChange}>
                                    <option value="all">all</option>
                                    <option value="single">single</option>
                                    <option value="double">double</option>
                                    <option value="family">family</option>
                                    <option value="presidential">presidential</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="capacity">Guests</label>
                                <select name="capacity" id="capacity" value={filter.capacity} className="form-control" onChange={filter.handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">room price ${filter.price}</label>
                                    <input 
                                    type="range" 
                                    name="price" 
                                    min={filter.minPrice}
                                    max={filter.maxPrice}
                                    id="price"
                                    value={filter.price}
                                    onChange={filter.handleChange} 
                                    className="form-control"/>
                            </div>
                            <div className="form-group">
                                <div className="single-extra">
                                    <input type="checkbox" name="breakfast" id="breakfast" checked={filter.breakfast} onChange={filter.handleChange}/>
                                    <strong><label htmlFor="breakfast">breakfast</label></strong>
                                </div>
                                <div className="single-extra">
                                    <input type="checkbox" name="pets" id="pets" checked={filter.pets} onChange={filter.handleChange}/>
                                    <strong><label htmlFor="pets">pets</label></strong>
                                </div>
                            </div>
                    </form>
                </section>
            </>
        )
    }
}


