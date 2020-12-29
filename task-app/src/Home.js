import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    getTasks() {
        axios.get("http://localhost:3001/api/v1/tasks")
    }








    render() {
        return (
            <div>
                
            </div>
        )
    }
}


  

