import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './search-panel';
import { Row, Col } from 'reactstrap';
import FilterController from '../controllers/filter-controller';
import BulkController from '../controllers/bulk-controller';
import ViewController from '../controllers/view-controller';

const Controller = ({
   term,
   handleSearch,
   toggleFormModal,
   handleFilter,
   view,
   changeView,
   clearCompleted,
   clearSelected,
   reset,
}) => {
   return (
      <div>
         <SearchPanel
            searchTerm={term}
            handleSearch={handleSearch}
            toggleFormModal={toggleFormModal}
         />
         <Row className='my-4'>
            <Col md={{ size: 4 }}>
               <FilterController handleFilter={handleFilter} />
            </Col>

            <Col md={{ size: 4 }}>
               <ViewController view={view} changeView={changeView} />
            </Col>

            <Col md={{ size: 4 }} className='d-flex'>
               <div className='ml-auto'>
                  <BulkController
                     clearSelected={clearSelected}
                     clearCompleted={clearCompleted}
                     reset={reset}
                  />
               </div>
            </Col>
         </Row>
      </div>
   );
};

Controller.propTypes = {
   term: PropTypes.string.isRequired,
   handleSearch: PropTypes.func.isRequired,
   toggleFormModal: PropTypes.func.isRequired,
   handleFilter: PropTypes.func.isRequired,
   view: PropTypes.string.isRequired,
   changeView: PropTypes.func.isRequired,
   clearSelected: PropTypes.func.isRequired,
   clearCompleted: PropTypes.func.isRequired,
   reset: PropTypes.func.isRequired,
};

export default Controller;
