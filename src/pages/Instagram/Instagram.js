import React, { Component } from "react";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";
import axios from "axios";
import Pic from "./Pic"

// NEED GRID
// import { Container, Row, Col, Input, Icon, Button, Collection, CollectionItem, Preloader } from "react-materialize";


// Make API call here

class Instagram extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            account: "personal",
        }
        // this.componentDidMount = this.componentDidMount.bind(this)

    }

    // state = {
    //     account: "personal",
    //     personDate: {}
    // }

    // state = {
    //     account: "personal",
    //     personData: {}
    // };


    handleButtonChange = event => {
        const { name, value } = event.target;

        console.log(this.state)
        console.log(event.target)

        //reminderstuff
        // this.setState({
        //     [name]: value
        // }, () => console.log(this.state.bio));
        // console.log(this.state)
    };

    //REMINDER
    // handleFormSubmit = event => {
    //     event.preventDefault();

    render() {
        console.log("2")
        // const { loading } = this.state;

        // if (loading) {
        //     return <Col className="loader" s={4}>

        //     </Col>;
        // }


        return (
            <Grid>
                <Row className="title">
                    <Col className="titleCol col-centered">
                        <span className="instaLogoSpan">
                            <a href="https://instagram.com/ameliarempe"><Image alt="" className="instaLogo" src={require("../../assets/logonb.png")} /></a>
                        </span>
                        <span className="instaTitle">ameliarempe</span>
                        {/* Get a new image */}
                    </Col>
                    <Col>

                    </Col>
                </Row>

                <Row className="photos">
                    <Col className="instaPic" xs={12} sm={6} md={3} lg={3}>
                        <Pic account={this.state.account} />
                    </Col>
                </Row>
            </Grid>




        )
    };
}

export default Instagram;