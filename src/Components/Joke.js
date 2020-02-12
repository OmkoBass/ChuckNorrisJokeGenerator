import React, { Component } from 'react'
import axios from 'axios'

export default class Joke extends Component {
    state = {
        punchLine : []
    }
    
    componentDidMount(){
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            let punchLine = res.data.value;
            this.setState({punchLine});
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
