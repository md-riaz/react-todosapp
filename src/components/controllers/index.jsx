import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './search-panel';

const Controller = ({ searchTerm, handleSearch, toggleFormModal }) => {
   return (
      <div>
         <SearchPanel
            searchTerm      = {searchTerm}
            handleSearch    = {handleSearch}
            toggleFormModal = {toggleFormModal}
         />
      </div>
   );
};

Controller.propTypes = {
   searchTerm     : PropTypes.string.isRequired,
   handleSearch   : PropTypes.func.isRequired,
   toggleFormModal: PropTypes.func.isRequired,
};

export default Controller;
