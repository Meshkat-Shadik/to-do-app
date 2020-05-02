import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const BulkController = ({ clearSelected, clearCompleted, reset }) => {
  return (
    <ButtonGroup>
      <Button color="info" onClick={clearSelected}
      style={{borderRight:'3px solid black'}}
      >
        Clear Selected
      </Button>

      <Button color="info" onClick={clearCompleted}
      style={{borderRight:'3px solid black'}}>
        Clear Completed
      </Button>

      <Button color="info" onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
