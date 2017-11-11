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
            percent: 32
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
        this.setState({page: this.state.page +1, percent: this.state.percent +34})
    }
    previousPage() {
        this.setState({page: this.state.page -1, percent: this.state.percent -34})
    }

    render() {
        const { onSubmit } = this.props
        const page = this.state.page

        if (page === 1) {
            return <FirstModule onSubmit = { this.nextPage } state={this.state.open} open= {this.open} close={this.close} percent={this.state.percent}/>
        }
        if (page === 2) {
            return <SecondModule onSubmit = { this.nextPage } previousPage = {this.previousPage} state={this.state.open} open= {this.open} close={this.close} percent={this.state.percent}/>
        }
        if (page === 3) {
            return <ThirdModule onSubmit = { onSubmit } previousPage = {this.previousPage} state={this.state.open} open= {this.open} close={this.close} resetPage={this.reset} page={this.state.page} percent={this.state.percent}/>
        }
    }
}


// Allows our form component to communicate with redux store,
// provides the props about the form state and function to handle submit process
NewCertForm = reduxForm({ 
    form: 'new_certificate',
})(NewCertForm)

export default NewCertForm;
