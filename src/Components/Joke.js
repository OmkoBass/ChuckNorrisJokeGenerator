import React, { Component } from 'react'
import axios from 'axios'

export default class Joke extends Component {
    constructor(props) {
        super(props)
        this.state = { punchLine: '' }
    }
    
    generate() {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            const punchLine = res.data.value;
            this.setState({ punchLine : punchLine });
        })
    }
    
    componentDidMount(){
        this.generate();
    }

    render() {
        return (
            <div>
                <h2>{this.state.punchLine}</h2>
                <button className="reload" onClick={this.generate.bind(this)}>Generate</button>
            </div>
        )
    }
}
