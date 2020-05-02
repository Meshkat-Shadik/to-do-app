import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes, { element } from "prop-types";

const FilterController = ({ handleFilter,status,handleActive }) => {
  return (
    <ButtonGroup  onClick={(event)=> handleActive(event.target.name)}>


      <Button id='1' name ="all" onClick={() => (handleFilter("all"))} className={status==='all'?
      'btn btn-success':''} style={{borderRight:'3px solid black'}}
      >All</Button>

      <Button id='2'name ="running" onClick={() => handleFilter("running")} className={status==='running'?
      'btn btn-success':''} style={{borderRight:'3px solid black'}}>Running</Button>

      <Button id='3' name ="completed" onClick={() => handleFilter("completed")} className={status==='completed'?
      'btn btn-success':''}>Completed</Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleActive: PropTypes.func,
};

export default FilterController;


//
//
// ((event.target.className = "btn btn-success")&&(event.target.name ))


/**
 * (event)=>{
        let val = event.target.name;
        if(val == 'running')
        {
          document.getElementById('2').className="btn btn-success"
          document.getElementById('1').className="btn btn-secondary"
          document.getElementById('3').className="btn btn-secondary"
        }
        else if(val == 'all')
        {
          document.getElementById('1').className="btn btn-success"
          document.getElementById('2').className="btn btn-secondary"
          document.getElementById('3').className="btn btn-secondary"
        }
        else if(val == 'completed')
        {
          document.getElementById('3').className="btn btn-success"
          document.getElementById('1').className="btn btn-secondary"
          document.getElementById('2').className="btn btn-secondary"
        }
    }
 */