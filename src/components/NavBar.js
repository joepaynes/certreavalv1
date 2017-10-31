import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//Semantic Components
import {
    Menu,
    Container,
    Button,
    Image
} from 'semantic-ui-react';

import logo from '../images/logo.png';

class Header extends Component {
    render() {
        return(
        <div>
            <Container>
                <Menu secondary size='large'>
                <Menu.Item as={Link} to="/">
                    <Image size="small" src={logo} />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Menu.Item as="a">About Us</Menu.Item>
                    <Link to="/dashboard">
                        <Button>Log in</Button>
                    </Link>
                    <Button as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
                </Menu>
            </Container>
        </div>
        )
    }
}

export default Header;