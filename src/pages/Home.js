import React, { Component } from 'react'
import Title from '../components/Title'


class Home extends Component {
    constructor() {
        super()

        this.state = ({
            title: "Book-e-Sell",
            description: "This is online Book Selling Platform"
        });
    }

    render() {
        return (
            <div>
                <Title title={this.state.title} description={this.state.description} />
            </div>
        )
    }
}

export default Home