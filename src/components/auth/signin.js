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

    render() {
        return(
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
        );
    };
}

export default connect(null, actions)(SignInForm);