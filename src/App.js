import React,  {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const App = () => {
  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({name: "", email: ""})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  };

  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Form is good to go!')
    }
  }

  console.log(errors);

  const findFormErrors = () => {
    const { name, email } = form
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    else if ( name.length > 30 ) newErrors.name = 'name is too long!'
    if ( !email || email === '' ) newErrors.email = 'cannot be blank!'
    else if ( email.length > 30 ) newErrors.email = 'email is too long!'
    return newErrors
  }
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6"></div>
          <h2 className="text-center">Validation Test</h2>
          {/* Actual Form Starts */}
          <Form className="col-sm-6">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleName" className="mr-sm-2">Name</Label>
              <Input type="text" name="name" placeholder="Raktim Shrestha" onChange={ e => setField('name', e.target.value) }
              invalid={errors.name ? true : false} />
              <FormFeedback>{errors.name}</FormFeedback >
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" placeholder="rakimsth@gmail.com" onChange={ e => setField('email', e.target.value) }
              invalid={errors.email ? true : false} />
              <FormFeedback>{errors.email}</FormFeedback >
            </FormGroup>
            <Button color="danger" className="mt-2 mb-2" onClick={ handleSubmit }>Submit</Button>
          </Form>
          <hr />
          <h3 className="text-center">Instructions</h3>
          <ul className="list-group">
            <li className="list-group-item">Press <span className="text-danger">Submit Button</span> to get started!</li>
            <li className="list-group-item">Initialize errors as empty from the start (check browser console)</li>
            <li className="list-group-item">On Input, Add the  <span className="text-danger">invalid</span> attribute as well as  <span className="text-danger">FormFeedback</span> component below Input </li>
            <li className="list-group-item">On form input, use onChange event to set the field value and check the value</li>
            <li className="list-group-item">Check and see if errors exist, and remove them from the error object</li>
            <li className="list-group-item">On Submit, validate the form values using  <span className="text-danger">findFormErrors</span> function</li>
            <li className="list-group-item">Add all the conditional check logics in findFormErrors function for each input</li>
            <li className="list-group-item">All the best!</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
