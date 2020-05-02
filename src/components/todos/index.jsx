import React, { Component } from "react";
import ListView from "../listviews";
import TableView from "../tableview";
import Controller from "../controllers";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CreateToDoForm from "../create-todo-form";
import shortid from "shortid";




class Todos extends Component {

  state = {
    todos: [
      {
        id: "dasdas",
        text: "habijabi",
        description: "wtqtq",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },

      {
        id: "fafafas",
        text: "new task",
        description: "wtqtq",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenToDoForm: false,
    searchTerm: "",
    view: "list",
    filter:'all',
    isClicked :false,
    active:''
   
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id == todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id == todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({ isOpenToDoForm: !this.state.isOpenToDoForm });
  };
  handleSearch = (value) => {

    this.setState ({
        searchTerm: value
    })

  };

  createToDo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (filter,x) => {
    this.setState({filter})
  //  console.log(filter)
  };

  handleActive = (active,y)=>
{
    //console.log(x)
    this.setState({active})
    console.log(this.state.active)
    //return   className= "btn btn-success"
   // if(x.name)
  // this.setState({isClicked:!isClicked})
}

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
    
  };









  clearSelected = () => {
      const todos = this.state.todos.filter(todo=> !todo.isSelect)
      this.setState({todos})
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter(todo=> !todo.isComplete)
    this.setState({todos})
  };
  reset = () => {
   this.setState({
       isOpenToDoForm: false,
       searchTerm: "",
       view: "list",
       filter:'all',

   })
  };












  performSearch = ()=>
  {
    return this.state.todos.filter(todo=>todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


//   setStatus = () =>
//   {
//     const {filter} = this.state
//     if(filter=='completed')
//     {
//         let arr = [...this.state.status]
//         arr[2] = true
//         this.setState({status:arr})
//      console.log(this.state.status)
//     }
//   }



  performFilter = (todos,event)=>
  {
      const {filter} = this.state
      if(filter=='completed')
      {
        
          return todos.filter(todo=>todo.isComplete)
      }
      else if (filter=='running')
      {
          return todos.filter(todo=>!todo.isComplete)
      }
      else{

          return todos
      }
  }

  onClickController = (event)=>
  {
    console.log(event.target.value)
  }

  getView = () => {
     let todos = this.performSearch()
     todos = this.performFilter(todos)
    return this.state.view == "list" ? (
      <ListView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <div className="my-5" style={{ border: "1px solid #DEE2e6" }}>
        <TableView
          todos={todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5 text-info">
          <u>My Todo's</u>
        </h1>
        <div className="my-4">
          <Controller
            term={this.state.searchTerm}
            toggleForm={this.toggleForm}
            handleSearch={this.handleSearch}
            view={this.state.view}
            handleFilter={this.handleFilter}
            changeView={this.changeView}
            clearCompleted={this.clearCompleted}
            reset={this.reset}
            clearSelected={this.clearSelected}
            handleActive = {this.handleActive}
            status={this.state.active}
          />
        </div>

        <div>
            {this.getView()}
        </div>

        <Modal isOpen={this.state.isOpenToDoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New ToDo Item
          </ModalHeader>

          <ModalBody>
            <CreateToDoForm createToDo={this.createToDo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Todos;
