import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { 
    Button, 
    Form
} from 'semantic-ui-react';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.signInUser(this.state);
    }

    // componentWillMount() {
    //     const fb_sdk = document.createElement('script');
    //     fb_sdk.setAttribute('src', '//connect.facebook.net/en_US/sdk.js');
    //     document.body.appendChild(fb_sdk);

    //     const fb_init_code = "FB.init({appId:'172080210042356',status:true,xfbml:true,version:'v2.6'});"
    //     const fb_init = document.createElement('script');
    //     fb_init.appendChild(document.createTextNode(fb_init_code));
    //     document.body.appendChild(fb_init);

    //     const fb_login_btn = '<fb:login-button data-auto-logout-link="true" scope="public_profile,email" size="large"></fb:login-button>';
    //     document.body.appendChild(fb_login_btn);
    // }

    render() {
        return(
        <div>
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input 
                placeholder='Email'
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input 
                placeholder='Password'
                type='password'
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange} 
            />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>

        <Button onClick={() => this.props.handleFB()}>Facebook</Button>

        </div>
        );
    };
}

export default connect(null, actions)(SignInForm);