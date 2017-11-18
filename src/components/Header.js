import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignInForm from './auth/signin';
import SignUpForm from './auth/signup';

//Semantic Components
import {
    Menu,
    Container,
    Button,
    Image,
    Icon,
    Modal
} from 'semantic-ui-react';

import logo from '../images/logo.png';

class Header extends Component {
    renderLinks() {
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
                        <Modal trigger={<Button>Sign in</Button>}>
                            <Modal.Content>
                                <SignInForm />
                            </Modal.Content>
                        </Modal>
                        <Modal trigger={<Button style={{ marginLeft: '0.5em' }}>Sign Up</Button>}>
                            <Modal.Content>
                                <SignUpForm />
                            </Modal.Content>
                        </Modal>
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