import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h2>Hello World</h2>
                </Jumbotron>
            </div>
        )
    };
};