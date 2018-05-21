import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class OwnPro extends Component {
    constructor() {
        super()
        this.state = {
            fetchInProgress: true,
            owner: [],
        }
        this.displayContent = this.displayContent.bind(this)
    }

    displayContent() {
        if(this.state.fetchInProgress) {
            return (
                <div>
                    <h4>Loading...</h4>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Owner: {this.state.owner.name}</h3>
                    <br />Owner ID: {this.state.owner.ownerId}
                </div>
            )
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/Owner/OWN1")
        .then(response => {
            this.setState({
                fetchInProgress: false,
                owner: response.data
            })
            console.log(this.state.owner)
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
                <h2>Owner Profile Page</h2>
                {this.displayContent()}
                <br /><br />
                <Link to="/">Home</Link>    
            </div>
        )
    }
}

export default OwnPro