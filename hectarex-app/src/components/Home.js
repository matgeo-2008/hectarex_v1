import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return(
            <div>
                <h3>Home</h3>
                <Link to="/owner">Owner Profile</Link>
                <br /><br />
                <Link to="/tenant">Tenant Profile</Link>
            </div>
        )
    }
}

export default Home