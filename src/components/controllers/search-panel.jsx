import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'reactstrap';

const SearchPanel = ({ searchTerm, handleSearch, toggleFormModal }) => {
   return (
      <div className = 'd-flex'>
         <Input
            placeholder = 'Enter Search Term'
            className   = 'mr-3'
            value       = {searchTerm}
            onChange    = {(e) => {
               handleSearch(e.target.value);
            }}
         />
         <Button color = 'success' onClick = {toggleFormModal}>
            New
         </Button>
      </div>
   );
};

SearchPanel.propTypes = {
   searchTerm     : PropTypes.string.isRequired,
   handleSearch   : PropTypes.func.isRequired,
   toggleFormModal: PropTypes.func.isRequired,
};

export default SearchPanel;
