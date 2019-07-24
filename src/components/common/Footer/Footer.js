import React, { Component } from 'react';


export default class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">SocialIcon1</a>
                    </li>
                    <li classname="nav-item">
                        <a className="nav-link" href="#">SocialIcon2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SocialIcon3</a>
                    </li>
                </ul>
            </div>
        )
    }
}