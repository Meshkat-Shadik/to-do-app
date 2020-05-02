import React from "react";
import SearchPanel from "./searchPanel";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import FilterController from "./filterController";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  changeView,
  view,
  clearCompleted,
  clearSelected,
  reset,
  handleActive,
  status
}) => {
  return (
    <div>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />
      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} 
            handleActive = {handleActive}
            status={status}
          />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} changeView={changeView} />
        </Col>
        <Col md={{ size: 4 }} className="d-flex">
          <div className="ml-auto">
            <BulkController clearCompleted={clearCompleted} clearSelected={clearSelected} reset={reset} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
Controller.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,

  handleFilter: PropTypes.func.isRequired,
  handleActive: PropTypes.func,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
