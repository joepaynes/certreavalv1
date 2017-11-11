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


const SecondModule = props => {
    const { handleSubmit, nextPage, previousPage} = props
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
                            label={"Certificate Type"}    
                            name="type"
                            component = {renderField}
                            type = "text"
                            placeholder= "certificate type"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Field
                            label={"Institute of study and attainment of certificate"}    
                            name="institute"
                            component = {renderField}
                            type = "text"
                            placeholder = "institute"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Field
                            label={"Country where certificate was issued"}    
                            name="country"
                            component = {renderField}
                            type = "text"
                            placeholder = "country"
                        />
                    </Form.Field>
                    <Button type="button" onClick={previousPage}> Previous </Button>
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
})(SecondModule)