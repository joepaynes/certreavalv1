import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import VerticalMenu from './vert_menu';

import { 
    Button, 
    Checkbox, 
    Form 
} from 'semantic-ui-react';

class CertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            certificate: '',
            type: '',
            date: '',
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
        this.props.createCert(this.state);
    }

    render() {
        return(
        <Container className="dashboard">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <VerticalMenu activeItem="Add New" />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                            <label>Certificate Name</label>
                            <input 
                                placeholder='Certificate Name'
                                name="certificate"
                                value={this.state.certificate}
                                onChange={this.handleInputChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <label>Type</label>
                            <input 
                                placeholder='Type'
                                name="type"
                                value={this.state.type}
                                onChange={this.handleInputChange} 
                            />
                            </Form.Field>
                            <Form.Field>
                            <label>Expiry Date</label>
                            <input 
                                type='date' 
                                name="date"
                                value={this.state.date}
                                onChange={this.handleInputChange}  />
                            </Form.Field>
                            <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        );
    };
}

export default connect(null, actions)(CertForm);