import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class TenPro extends Component {
    constructor() {
        super()
        this.state = {
            fetchInProgress: true,
            tenant: [],
        }
        this.displayContent = this.displayContent.bind(this)
    }

    displayContent() {
        if(this.state.fetchInProgress){
            return (
                <div>
                    <h4>Loading...</h4>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Tenant: {this.state.tenant.name}</h3>
                    <br />Tenant ID: {this.state.tenant.tenantId}
                </div>
            )
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/Tenant/TEN1")
        .then(response => {
            this.setState({
                fetchInProgress: false,
                tenant: response.data
            })
            console.log(this.state.tenant)
        })
        .catch(err => {
            console.log(err)
            this.setState({
                fetchInProgress: false
            })
        })
    }

    render() {
        return(
            <div>
                <h2>Tenant Profile Page</h2>
                {this.displayContent()}
                <br /><br />
                <Link to="/">Home</Link>    
            </div>
        )
    }
}

export default TenPro