import React, {Component} from 'react';
import {Tabs, Tab, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class Content extends Component{
    render(){

        return(
           
            <Grid fluid>
                <Row>
                    <Col sm={12} xs={12} md={12} className="text-center">
                        <h2>Welcome To</h2>
                        <h1 className="app-name-main">CricCard</h1>
                        <h4>A cricket scoring application on React.js</h4>
                    </Col>
                </Row>
                <Row>
                    <Grid className="initial-match-data-wrapper">
                        <Row>
                            <Col sm={12} xs={12} md={12} className="">
                                <h2>Match Data</h2>
                            </Col>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
            
        );
    }
}

export default Content;