import React, { Component } from 'react'
import axios from 'axios'

export default class Joke extends Component {
    state = {
        punchLines : []
    }
    
    componentDidMount(){
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            const punchLine = res.data.value;
            this.setState({ punchLine });
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.punchLine}</h2>
            </div>
        )
    }
}
