import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class TenPro extends Component {
    constructor() {
        super()
        this.state = {
            tenant: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/Tenant/TEN1")
        .then(response => {
            this.setState({tenant: response.data})
            console.log(this.state.tenant)
        })
        .catch(err => {console.log(err)})
    }

    render() {
        return(
            <div>
                <h3>Tenant: {this.state.tenant.name}</h3>
                <br />Tenant ID: {this.state.tenant.tenantId}
                <br /><br />
                <Link to="/">Home</Link>    
            </div>
        )
    }
}

export default TenPro