import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Semantic Components
import {
    Menu,
    Container,
    Button,
    Image,
    Icon
} from 'semantic-ui-react';

import logo from '../images/logo.png';

class Header extends Component {
    renderLinks() {
        console.log()
        if(this.props.authenticated === true) {
            return <Menu.Item position='right'>
                        <Link to="/signout">
                            <Button>Sign Out</Button>
                        </Link>
                        <Link to="/dashboard">
                            <Icon name="user circle outline" color="black" size="big" />
                        </Link>
                    </Menu.Item>
        } else {
            return  <Menu.Item position='right'>
                        <Menu.Item as="a">About Us</Menu.Item>
                        <Link to="/dashboard">
                            <Button>Log in</Button>
                        </Link>
                        <Link to="/signup">
                            <Button style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                        </Link>
                    </Menu.Item>    
        }

    }
    render() {
        return(
        <div>
            <Container>
                <Menu secondary size='large'>
                <Menu.Item as={Link} to="/">
                    <Image size="small" src={logo} />
                </Menu.Item>
                {this.renderLinks()}
                </Menu>
            </Container>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps, null)(Header);