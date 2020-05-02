import React, { Component } from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import PropTypes from 'prop-types'

class CreateToDoForm extends Component {

    state= {
        text:'',
        description:''
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>
    {
        event.preventDefault()
        this.props.createToDo(this.state)
        event.target.reset()
        this.setState({text:'',description:''})
    }


    render() {
        return (
           <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                   <Label>Enter Task</Label>
                   <Input
                        placeholder="Do some Code"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}>
                   </Input>
               </FormGroup>
               <FormGroup>
                   <Label>Describe Task</Label>
                   <Input
                        type="textarea"
                        placeholder="Write some Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}>
                   </Input>
               </FormGroup>
               <Button
                    type="submit">
                    Create Task
               </Button>
           </Form>
        )
    }
}

CreateToDoForm.propTypes = {
    createToDo: PropTypes.func.isRequired
}



export default CreateToDoForm