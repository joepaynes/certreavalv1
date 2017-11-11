import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './render_field'

import {
    Modal,
    Form,
    Button,
    Progress
} from 'semantic-ui-react'

    const FirstModule = props => {
        const { handleSubmit, nextPage } = props
        const { state } = props
        return (
            <Modal
            trigger={<Button floated={"right"}> Add New </Button>}
            dimmer={"blurring"}
            open={state}
            onOpen={props.open}
            onClose={props.close}
            closeIcon
            >
                <Modal.Header>
                    <Progress percent={props.percent} indicating />
                    Where applicable enter information exactly as it appears on your documentation
                </Modal.Header>
                <Modal.Content className="container">
                    <Form onSubmit = {handleSubmit} className="container">
                        <Form.Field>
                            <Field
                                label={"Certificate Name"}    
                                name="name"
                                component = {renderField}
                                type = "text"
                                placeholder = "Certificate name"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Field
                                label={"Date Of Issue"}    
                                name="issueDate"
                                component = {renderField}
                                type = "date"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Field
                                label={"Date Of Expiry"}    
                                name="expiryDate"
                                component = {renderField}
                                type = "date"
                            />
                        </Form.Field>
                        <Button type="submit" onClick={nextPage}> Next </Button> 
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }

export default reduxForm({
    form: "new_certificate",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validate
})(FirstModule)