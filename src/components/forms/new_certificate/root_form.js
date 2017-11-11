import React, {Component} from 'react'
import { reduxForm } from 'redux-form'

import FirstModule from "./first_module"
import SecondModule from "./second_module"
import ThirdModule from "./third_module"

 class NewCertForm extends Component {

    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            page: 1,
            open: false,
        }
    }

    open() {
        this.setState({open: true})
    }
    close() {
        this.setState({open: false})
    }
    reset() {
        this.setState({page: 1})
    }
    nextPage() {
        this.setState({page: this.state.page +1})
    }
    previousPage() {
        this.setState({page: this.state.page -1})
    }

    render() {
        const { onSubmit } = this.props
        const page = this.state.page

        if (page === 1) {
            return <FirstModule onSubmit = { this.nextPage } state={this.state.open} open= {this.open} close={this.close}/>
        }
        if (page === 2) {
            return <SecondModule onSubmit = { this.nextPage } previousPage = {this.previousPage} state={this.state.open} open= {this.open} close={this.close} />
        }
        if (page === 3) {
            return <ThirdModule onSubmit = { onSubmit } previousPage = {this.previousPage} state={this.state.open} open= {this.open} close={this.close} resetPage={this.reset} page={this.state.page} />
        }
    }
}


// Allows our form component to communicate with redux store,
// provides the props about the form state and function to handle submit process
NewCertForm = reduxForm({ 
    form: 'new_certificate',
})(NewCertForm)

export default NewCertForm;
