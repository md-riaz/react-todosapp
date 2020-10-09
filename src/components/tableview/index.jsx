import React from 'react';
import PropTypes from 'prop-types';
import RowItem from './rowitem';
import { Table } from 'reactstrap';

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
   return (
      <Table>
         <thead>
            <tr>
               <th>#</th>
               <th>Time</th>
               <th>Todo</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {todos.map((todo) => {
               return (
                  <RowItem
                     key={todo.id}
                     todo={todo}
                     toggleSelect={toggleSelect}
                     toggleComplete={toggleComplete}
                  />
               );
            })}
         </tbody>
      </Table>
   );
};
TableView.propTypes = {
   todos: PropTypes.object.isRequired,
   toggleSelect: PropTypes.func.isRequired,
   toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
