import React from 'react'
import { Field, reduxForm } from 'redux-form'

import VerticalMenu from './vert_menu';

import { 
    Button, 
    Checkbox, 
    Form,
    Container,
    Grid
} from 'semantic-ui-react';

let NewCertForm = props => {
    const { handleSubmit } = props

    return (
        <Container className="dashboard">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <VerticalMenu activeItem="Certificates" />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Form onSubmit= {handleSubmit}>
                            <Form.Field>
                            <label>Certificate Name</label>
                            <Field 
                                name="certName"
                                component = "input"
                                type = "text"
                                placeholder = "Certificate name"
                            />
                            </Form.Field>
                            <Form.Field>
                            <label>Type</label>
                            <Field 
                                name = "certType"
                                component = "input"
                                type="text"
                                placeholder = "Certificate Type"
                            />
                            </Form.Field>
                            <Form.Field>
                            <label>Expiry Date</label>
                            <Field 
                                name="certExpiryDate" 
                                component="input" 
                                type="date"            
                            />
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
    )
}

const validate = values => {
    const errors = {}
    if (!values.certName) {
        errors.certname = 'Required'
    }
    if (!values.certType) {
        errors.certtype = "Required"
    }
    if(!values.certExpiryDate) {
        errors.certexpirydate = "Required"
    }

}

// Allows our form component to communicate with redux store,
// provides the props about the form state and function to handle submit process
NewCertForm = reduxForm({ 
    form: 'newCert',
    validate: validate
})(NewCertForm)

export default NewCertForm;
