import React, { Component } from 'react';

import { Router, Link } from '@reach/router';

import Code from '../../developer-side/Content/Code';
import Photo from '../../photo-side/Photo';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Link to="code">Developer</Link>
                <Link to="photo">Photographer</Link>
                <Router>
                    <Code path="code" />
                    <Photo path="photo" />
                </Router>
            </div>
        )
    }
}