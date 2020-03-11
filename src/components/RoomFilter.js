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
                    </form>
                </section>
            </>
        )
    }
}


