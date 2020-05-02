Extra libraries that I have to install for this mini project.

1. react-starp (npm install --save reactstrap react react-dom)
2. prop-types  (npm install --save prop-types)
3. shortid (npm install shortid)



### Directories:  
 **controllers** 
     - bulk-controller.jsx
     - filterController.jsx
     - index.jsx
     - searchPanel.jsx
     - view-controller.jsx
    
  **create-todo-form**
    - index.jsx
  
  **listviews**
    - index.jsx
    
  **tableview**
    - index.jsx
    
  **todos**
    - index.jsx
    
 
-------------------------------------------------  Discussion  -------------------------------------------------------------
#### ***todos -> index.jsx***
this file is the motherboard of this whole mini-project. Basically it is a statefull class based component. A state contains a **todo** array which contains unique object. Those object are the property of a task, as the app based on state storage. The other properties of the states are ** isOpenToDoForm** , **searchTerm**, **view**, **filter** and **active**

    
    state = {
    todos: [
      {
        id: "dasdas",           //for complete action button 
        text: "habijabi",       //task's heading
        description: "wtqtq",   //task's description
        time: new Date(),       //current date
        isComplete: false,      //button handle
        isSelect: false,        //checkbox handle
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
    isOpenToDoForm: false,      //modal handler 
    searchTerm: "",             //search box's text
    view: "list",               //initial view type
    filter:'all',               //initial filter type
    active:''                   //active button for left side buttons
  }

There are so many  ***(14)***  functions for handling all actions.
  
  -  ##### toggleSelect
    toggleSelect = (todoId) => {
    const todos = [...this.state.todos];        //immutable way
    const todo = todos.find((t) => t.id == todoId);     
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
      };

  -  ##### toggleComplete
  -  ##### toggleForm
  -  ##### handleSearch
  -  ##### createToDo
  -  ##### handleFilter
  -  ##### handleActive
  -  ##### changeView
  -  ##### clearSelected
  -  ##### clearCompleted
  -  ##### reset
  -  ##### performSearch
  -  ##### performFilter
  -  ##### getView
