Extra libraries that I have to install for this mini project.

1. react-starp (npm install --save reactstrap react react-dom)
2. prop-types  (npm install --save prop-types)
3. shortid (npm install shortid)



### Directories:  
 **controllers** 
     -  bulk-controller.jsx     (bulk buttons)
     -  filterController.jsx    (filter buttons)
     -  index.jsx           (middle-ware)
     -  searchPanel.jsx     (search-box)
     -  view-controller.jsx     (handle views)
    
  **create-todo-form**
    - index.jsx
  
  **listviews**
    - index.jsx
    
  **tableview**
    - index.jsx
    
  **todos**
    - index.jsx
    
 
 ## ---------------------------------------  ***Discussion***  -----------------------------------------------
#### ***todos -> index.jsx***
this file is the motherboard of this whole mini-project. Basically it is a statefull class based component. A state contains a **todo** array which contains unique object. Those object are the property of a task, as the app based on state storage. The other properties of the states are, **'isOpenToDoForm'** , **'searchTerm'**, **'view'**, **'filter'** and **'active'**

    
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
  
-  ##### clearSelected      (bulk-controller)
-  ##### clearCompleted     (bulk-controller)
-  ##### reset              (bulk-controller)
  


  -  ##### handleFilter             (filterController)
Update the state (clickable) of filtering buttons (all,running,completed)
    
    handleFilter = (filter) => {
         this.setState({filter})         //es6 syntax 
    };
 
 
-  ##### handleActive       (filterController)
This function is for the buttons(all,running,completed) which are activated now.  

    handleActive = (active)=>
    {
        this.setState({active})             //es6 syntax
        console.log(this.state.active)      //just for testing which button clicked, as the button name are saved in                                            
                                             this state via callback
    }
    
  -  ##### toggleForm (searchPanel->modal)

    toggleForm = () => {
        this.setState({ isOpenToDoForm: !this.state.isOpenToDoForm  });    //handle the modal clickable
     };
  -  ##### handleSearch         (searchPanel)

    handleSearch = (value) => {
    this.setState ({
        searchTerm: value           //search textbox handle via state
      })
    };    
    
  -  ##### changeView (view-controller)
This function is for selecting the view as List view or as Table view.
        
    changeView = (event) => {
        this.setState({
        view: event.target.value,
        });
    };    
  -  ##### toggleSelect (List & Table view)
    toggleSelect = (todoId) => {
        const todos = [...this.state.todos];        //immutable way
        const todo = todos.find((t) => t.id == todoId);     //find exact one todo(row)
        todo.isSelect = !todo.isSelect;     //selectable property
        this.setState({ todos });           //update state
      };

  -  ##### toggleComplete   (List & Table view)
         
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos];        //immutable way
        const todo = todos.find((t) => t.id == todoId); //find exactly one todo(row)
        todo.isComplete = !todo.isComplete;     //complete button clickable
        this.setState({ todos });       //update state
    };
            


  -  ##### createToDo   (own)
After clicking 'create new' in the modal box, this function will help to create the whole todo data.

    createToDo = (todo) => {
        todo.id = shortid.generate();       //unique id for each todo
        todo.time = new Date();             //creation time
        todo.isComplete = false;            //initial value is running
        todo.isSelect = false;              //initially it is not selected
    
        const todos = [todo, ...this.state.todos];      //insert a new todo as an immutable way 
        this.setState({ todos });           //update todos with new todos
        this.toggleForm();      //handle the modal box
    };






-  ##### performSearch  (own)
It is used for searching the tasks according to given value. the state holds the array of the todo elements. We have to apply filter method to complete the searching. 
        
     performSearch = ()=>
    {
        return this.state.todos.filter(todo=>
        todo.text.toLowerCase().
        includes(this.state.searchTerm.toLowerCase()))
    }
-  ##### performFilter(own)
This method accepts the 'todo' object and in this object the property 'filter' will return the name of button from state. Then, we just return the todo by reading the property of 'filter' from state.

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
         else
        {
          return todos
        }
    }
-  ##### getView(own)
This method sets the todo list, later the lists are shown in the table or list view.

    getView = () => {
     let todos = this.performSearch()
     todos = this.performFilter(todos)
     
        return this.state.view == "list" ? 
            (<ListView
                todos={todos}
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect}
              />)
              : 
              (<div className="my-5" style={{ border: "1px solid #DEE2e6" }}>
                <TableView
                  todos={todos}
                  toggleComplete={this.toggleComplete}
                  toggleSelect={this.toggleSelect}
                />
              </div>);
     };
