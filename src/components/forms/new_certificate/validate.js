const validate = values => {
    const errors = {}
    if (!values.certname) {
        errors.certName = "Required"
    }
}

export default validate