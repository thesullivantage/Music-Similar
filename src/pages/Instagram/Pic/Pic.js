import React, { Component } from "react";
import { Row, Col, Clearfix, Image } from "react-bootstrap";
import axios from "axios";
import Gallery from 'react-grid-gallery';
// import { InstagramPosts } from "instagram-screen-scrape"
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Redirect } from "react-router-dom";

class Pic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: this.props.account,
            data: {},
            loading: "true",
            scraped: "false",
            galData: []
        }
        this.link = this.link.bind(this);
        // this.componentDidMount.scraper = this.componentDidMount.scraper.bind(this)
    }

    componentDidMount() {

        //INSTAGRAM API:
        axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=216301563.27b1b5b.125a9eed4ee441cdb5a7cb0a72d93adc")
            .then(response => {
                console.log("DATA1", response.data.data);
                const height = 400;
                this.setState({
                    galData: response.data.data.map(item => ({
                        src: item.images.standard_resolution.url,
                        thumbnail: item.images.standard_resolution.url,
                        thumbnailWidth: height,
                        thumbnailHeight: height * (item.images.standard_resolution.height / item.images.standard_resolution.width),
                        caption: item.caption.text,
                        alt: "",
                        link: item.link
                    }))
                }, () => console.log("GalData", this.state.galData))
            })
            .then(() =>
                setTimeout(() =>
                    this.setState({
                        loading: "false"
                    }, () => console.log("false")), 1500
                )
            )
            .catch(function (error) {
                console.log(error);
                this.setState({
                    loading: "error"
                })
            });
    }


    //going to need to cache whole page, and keep track of where we were at
    //Use Browser history from React router?
    link (event) {
        const dataSearch = this.state.galData
        console.log("DS", dataSearch)
        const src = event.target.src
        for (var i = 0; i < dataSearch.length; i++) {
            console.log("i")
            if (dataSearch[i].src === src) {
                const link = dataSearch[i].link
                // console.log("link", link)
                return window.location.href = link
                // <Redirect to={link}/>
            }
        } return console.log("bunk");
    }

    render() {
        if (this.state.loading === "true") {
            
            const override = css`
            display: block;
            position: relative;
            margin: 0 auto;
            border-color: #8CA0AB;
            border-thickness: 5px;
            display: block; 
	        vertical-align: middle; 
	        white-space: normal;
            `;

            return (
                <Col className="loading">
                    <span className="ltContainer">
                        <h1 className="loadingText">Loading</h1>
                    </span>
                    <RingLoader
                        css={override}
                        loading={true}
                        size={150}
                        color={'#C2887D'}
                        // sizeUnit={"%"}
                    />
                </Col>
            )
        } else if (this.state.loading === "false") {
            
            //Insta API
            // const DATA = data.map(item => ({
            //     src: item.images.standard_resolution.url,
            //     thumbnail: item.images.standard_resolution.url,
            //     thumbnailWidth: height,
            //     thumbnailHeight: height * (item.images.standard_resolution.height / item.images.standard_resolution.width),
            //     caption: item.caption.text,
            //     alt: "",
            //     link: item.link
            // }))
            // console.log("DATAZ", DATA)
            return (
                <div>
                    <Gallery
                        images={this.state.galData}
                        enableImageSelection={false}
                        onClickImage={this.link}
                    /> 
                </div>
                
            )

        } else {
            return (
                <Col>
                    <div className="errorGram">
                        There was an error loading Instagram posts
                    </div>
                </Col>
            )
        }

        // if (this.state.data) {
        //     return (
        //         this.state.data.map()
        //     )
        // }
    }


};

export default Pic;