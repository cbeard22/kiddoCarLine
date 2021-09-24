import React, {Component} from 'react';

export default class Navbar extends Component {


    render() {
        let studentData = this.props.studentData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="navbar">
                        <ul className="nav">
                            <li className="current"><a href="#Home">Home</a></li>
                            <li><a href="#Admin">#Admin</a></li>
                            <li><a href="#Login">#Login</a></li>
                            <li><a href="#Signup">#Signup</a></li>

                        </ul>

                    </nav>







                    

                </header>






                
            </React.Fragment>
        )
    }




}