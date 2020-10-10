import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, CustomInput, Button } from 'reactstrap';
// List Item Component

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
   return (
      <ListGroupItem className='d-flex align-items-center'>
         <CustomInput
            type='checkbox'
            id={todo.id}
            onChange={() => {
               toggleSelect(todo.id);
            }}
            checked={todo.isSelect}
         />
         <div className='mx-3'>
            <h4>{todo.text}</h4>
            <p>{todo.time.toDateString()}</p>
         </div>
         <Button
            className='ml-auto'
            color={todo.isComplete ? 'danger' : 'success'}
            onClick={() => {
               toggleComplete(todo.id);
            }}
         >
            {todo.isComplete ? 'Completed' : 'Running'}
         </Button>
      </ListGroupItem>
   );
};
ListItem.propTypes = {
   todo: PropTypes.object.isRequired,
   toggleSelect: PropTypes.func.isRequired,
   toggleComplete: PropTypes.func.isRequired,
};
export default ListItem;
