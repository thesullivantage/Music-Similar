import * as Redux from "redux";
import React, { Component } from "react"

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: ""
        }
    }

    componentDidMount() {
        // instagramScraper.getUserData('ameliarempe')
        // .then(userData => {
        //     console.log('User data: ', userData)
        // })
        // .catch(error => console.log("SCRAPERR", error))
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}

export default Homepage;