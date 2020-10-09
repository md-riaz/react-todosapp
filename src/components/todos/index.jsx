import React, { Component } from 'react';
import ListView from '../listview';
import TableView from '../tableview';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreateTodoForm from '../create-todo-form';
import Controller from '../controllers';
import shortid from 'shortid';

export default class Todos extends Component {
   state = {
      todos: [
         {
            id         : 'abcd',
            text       : 'this is test todo',
            description: 'this is the todobody',
            time       : new Date(),
            isComplete : false,
            isSelect   : false,
         },
         {
            id         : 'abcd2',
            text       : 'this is test todo2',
            description: 'this is the todobody2',
            time       : new Date(),
            isComplete : false,
            isSelect   : false,
         },
      ],
      isTodoFormOpen: false,
      searchTerm    : '',
   };

   toggleSelect = (todoId) => {
      const todos         = [...this.state.todos];
      const todo          = todos.find((t) => t.id === todoId);
            todo.isSelect = !todo.isSelect;
      this.setState({ todos });
   };
   toggleComplete = (todoId) => {
      const todos           = [...this.state.todos];
      const todo            = todos.find((t) => t.id === todoId);
            todo.isComplete = !todo.isComplete;
      this.setState({ todos });
   };
   toggleFormModal = () => {
      this.setState({ isTodoFormOpen: !this.state.isTodoFormOpen });
   };
   handleSearch = () => {};
   createTodo   = (todo) => {
      todo.id         = shortid.generate();
      todo.time       = new Date();
      todo.isComplete = false;
      todo.isSelect   = false;

      const todos = [todo, ...this.state.todos];
      this.setState({ todos });
      this.toggleFormModal();
   };
   render() {
      return (
         <div>
            <h1 className = 'display-4 text-center mb-5'>Stack Todos</h1>
            <Controller
               searchTerm      = {this.state.searchTerm}
               toggleFormModal = {this.toggleFormModal}
               handleSearch    = {this.handleSearch}
            />
            <div>
               <ListView
                  todos          = {this.state.todos}
                  toggleSelect   = {this.toggleSelect}
                  toggleComplete = {this.toggleComplete}
               />
            </div>
            <div>
               <TableView
                  todos          = {this.state.todos}
                  toggleSelect   = {this.toggleSelect}
                  toggleComplete = {this.toggleComplete}
               />
            </div>{' '}
            <Modal
               isOpen = {this.state.isTodoFormOpen}
               toggle = {this.toggleFormModal}
            >
               <ModalHeader toggle = {this.toggleFormModal}>
                  Create New Todo Item
               </ModalHeader>
               <ModalBody>
                  <CreateTodoForm createTodo = {this.createTodo} />
               </ModalBody>
            </Modal>
         </div>
      );
   }
}
