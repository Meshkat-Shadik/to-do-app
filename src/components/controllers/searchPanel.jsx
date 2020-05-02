import React from 'react'
import {Input,Button} from 'reactstrap'
import PropTypes from 'prop-types'

const SearchPanel = ({term,handleSearch,toggleForm})=>{
    return (
        <div >
            <Input
            placeholder="Enter Search Term"
            className="mr-3"
            value={term}
            onChange={e=>handleSearch(e.target.value)}
            />
            
            <Button
                color="warning"
                onClick={toggleForm}
                className="my-2 form-control"
            >
               Create New Todo list
            </Button>
        </div>
    )
}

SearchPanel.propTypes = {
    term : PropTypes.string.isRequired,
    handleSearch : PropTypes.func.isRequired,
    toggleForm : PropTypes.func.isRequired
}


export default SearchPanel