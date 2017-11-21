import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';

import SignInForm from './auth/signin';
import SignUpForm from './auth/signup';

//Semantic Components
import {
    Menu,
    Container,
    Button,
    Image,
    Icon,
    Modal,
    Popup
} from 'semantic-ui-react';

import logo from '../images/logo.png';

class Header extends Component {
    profilePicture = () => {
        if(!this.props.user.photoURL) {
            return <Icon name="user circle outline" color="black" size="big" />
        } else {
            return <Image src={this.props.user.photoURL} avatar />
        }
    };

    renderLinks() {
        if(this.props.authenticated === true) {
            return <Menu.Item position='right'>
                        <Link to="/dashboard">
                            <div style={{marginRight: "5px", display: "inline"}}>
                                {this.props.user.displayName}
                            </div>
                            <Popup trigger={this.profilePicture()} on="hover" hoverable="true" basic>
                                <Menu compact>
                                    <Menu.Item  icon="sign out" as="a" onClick={() => history.push('/signout')} name="Sign Out" />
                                </Menu>
                            </Popup>
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
    return { 
        authenticated: state.auth.authenticated,
        user: state.user
    };
}

export default connect(mapStateToProps, null)(Header);