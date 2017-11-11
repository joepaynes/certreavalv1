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

const ThirdModule = props => {
    const {handleSubmit, previousPage, resetPage, open, close} = props
    const { state } = props
    return (
        <Modal
        trigger={<Button floated={"right"}> Add New </Button>}
        dimmer={"blurring"}
        open={state}
        onOpen={open}
        onClose={close}
        closeIcon
        >
            <Modal.Header>
                <Progress percent={props.percent} indicating />
                Please take time to throughly read our Terms and Conditions
            </Modal.Header>
            <Modal.Content className="container">
                <Form onSubmit = {()=>{
                    handleSubmit()
                    close()
                    resetPage()
                }} className="container">
                    <Form.Field>
                        <Form.TextArea 
                            label="Terms and Conditions"
                            value="Spicy jalapeno bacon ipsum dolor amet shank corned beef landjaeger fatback filet mignon sausage shoulder brisket shankle short ribs porchetta boudin meatball prosciutto ham. Andouille pork loin ribeye, ground round tail pancetta shankle shank landjaeger meatloaf boudin porchetta. Ham alcatra turkey meatloaf, shoulder beef ribs turducken short ribs burgdoggen bresaola venison pork chop. Flank andouille cupim strip steak t-bone doner boudin beef ribs leberkas biltong. Bacon short loin beef hamburger shankle swine. Picanha ground round pork belly bacon. Turducken short loin tri-tip filet mignon pork alcatra pastrami capicola ground round spare ribs short ribs kevin hamburger. Meatloaf kielbasa pancetta landjaeger, pork loin sirloin chuck jerky flank ball tip meatball drumstick tail swine capicola. Chuck biltong ham, capicola strip steak ground round meatloaf shankle. Capicola alcatra fatback pig, cupim kielbasa ball tip sausage prosciutto flank tongue jowl. Sirloin meatloaf tri-tip bresaola prosciutto capicola cow brisket pastrami boudin filet mignon. Burgdoggen venison doner, shank pork belly short ribs andouille sirloin prosciutto ball tip. Turkey jerky sirloin, pancetta bresaola pork belly shankle. Chuck turkey jowl, leberkas short ribs turducken venison prosciutto landjaeger shank meatball boudin porchetta fatback pastrami. Sirloin strip steak pork chop cupim picanha turducken chicken pork loin doner biltong corned beef. Tongue rump shank chicken boudin, swine leberkas cupim pastrami venison picanha filet mignon tail ham hock porchetta. Ham hock tongue chicken, brisket pork loin frankfurter porchetta t-bone ham chuck. Fatback ribeye pancetta porchetta, ball tip spare ribs jowl kevin drumstick kielbasa salami. Cupim strip steak short ribs, biltong pastrami meatball landjaeger beef ribs ham hock ball tip ribeye. Strip steak drumstick alcatra, picanha sausage pancetta landjaeger ribeye. Swine spare ribs chuck picanha short ribs short loin ribeye chicken pork loin drumstick. Ham hock chuck pork landjaeger spare ribs bresaola, turkey pork loin burgdoggen shoulder. Tri-tip rump t-bone doner meatball tenderloin pork loin. Tail chicken filet mignon ribeye. Fatback chuck drumstick meatloaf, t-bone beef ground round prosciutto pastrami boudin ball tip venison pork hamburger sausage. Spare ribs venison pastrami andouille alcatra pig drumstick cow ground round filet mignon sausage corned beef ribeye burgdoggen kevin. Ground round prosciutto porchetta chuck flank ball tip cow landjaeger shankle. Venison boudin pork belly short loin, meatball capicola flank pig shankle ribeye bacon. Capicola pancetta sausage porchetta leberkas. Bresaola tail fatback salami porchetta corned beef. Spicy jalapeno bacon ipsum dolor amet shank corned beef landjaeger fatback filet mignon sausage shoulder brisket shankle short ribs porchetta boudin meatball prosciutto ham. Andouille pork loin ribeye, ground round tail pancetta shankle shank landjaeger meatloaf boudin porchetta. Ham alcatra turkey meatloaf, shoulder beef ribs turducken short ribs burgdoggen bresaola venison pork chop. Flank andouille cupim strip steak t-bone doner boudin beef ribs leberkas biltong. Bacon short loin beef hamburger shankle swine. Picanha ground round pork belly bacon. Turducken short loin tri-tip filet mignon pork alcatra pastrami capicola ground round spare ribs short ribs kevin hamburger. Meatloaf kielbasa pancetta landjaeger, pork loin sirloin chuck jerky flank ball tip meatball drumstick tail swine capicola. Chuck biltong ham, capicola strip steak ground round meatloaf shankle. Capicola alcatra fatback pig, cupim kielbasa ball tip sausage prosciutto flank tongue jowl. Sirloin meatloaf tri-tip bresaola prosciutto capicola cow brisket pastrami boudin filet mignon. Burgdoggen venison doner, shank pork belly short ribs andouille sirloin prosciutto ball tip. Turkey jerky sirloin, pancetta bresaola pork belly shankle. Chuck turkey jowl, leberkas short ribs turducken venison prosciutto landjaeger shank meatball boudin porchetta fatback pastrami. Sirloin strip steak pork chop cupim picanha turducken chicken pork loin doner biltong corned beef. Tongue rump shank chicken boudin, swine leberkas cupim pastrami venison picanha filet mignon tail ham hock porchetta. Ham hock tongue chicken, brisket pork loin frankfurter porchetta t-bone ham chuck. Fatback ribeye pancetta porchetta, ball tip spare ribs jowl kevin drumstick kielbasa salami. Cupim strip steak short ribs, biltong pastrami meatball landjaeger beef ribs ham hock ball tip ribeye. Strip steak drumstick alcatra, picanha sausage pancetta landjaeger ribeye. Swine spare ribs chuck picanha short ribs short loin ribeye chicken pork loin drumstick. Ham hock chuck pork landjaeger spare ribs bresaola, turkey pork loin burgdoggen shoulder. Tri-tip rump t-bone doner meatball tenderloin pork loin. Tail chicken filet mignon ribeye. Fatback chuck drumstick meatloaf, t-bone beef ground round prosciutto pastrami boudin ball tip venison pork hamburger sausage. Spare ribs venison pastrami andouille alcatra pig drumstick cow ground round filet mignon sausage corned beef ribeye burgdoggen kevin. Ground round prosciutto porchetta chuck flank ball tip cow landjaeger shankle. Venison boudin pork belly short loin, meatball capicola flank pig shankle ribeye bacon. Capicola pancetta sausage porchetta leberkas. Bresaola tail fatback salami porchetta corned beef."
                            readOnly={true}
                            rows= {15}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Field
                            label={"I agree to the Terms and Conditions"}    
                            name="TC"
                            component = {renderField}
                            type = "checkbox" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <Field
                            label={"I declare i have given a faithful and true representation of my certificate and its value"}    
                            name="declaration"
                            component = {renderField}
                            type = "checkbox" 
                        />
                    </Form.Field>
                    <Button type="button" onClick={previousPage}> Previous </Button>
                    <Button type="submit"> Submit </Button> 
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
})(ThirdModule)