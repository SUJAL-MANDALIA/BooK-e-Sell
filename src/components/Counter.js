import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        }, () => { console.log(this.state.number) })

    }

    render() {
        return (
            <div>
                <p>Count - {this.state.number}</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default Counter
