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
            id: 'abcd',
            text: 'this is test todo',
            description: 'this is the todobody',
            time: new Date(),
            isComplete: false,
            isSelect: false,
         },
         {
            id: 'abcd2',
            text: 'this is test todo2',
            description: 'this is the todobody2',
            time: new Date(),
            isComplete: false,
            isSelect: false,
         },
      ],
      isTodoFormOpen: false,
      searchTerm: '',
      view: 'list',
      filter: 'all',
   };

   toggleSelect = (todoId) => {
      const todos = [...this.state.todos];
      const todo = todos.find((t) => t.id === todoId);
      todo.isSelect = !todo.isSelect;
      this.setState({ todos });
   };
   toggleComplete = (todoId) => {
      const todos = [...this.state.todos];
      const todo = todos.find((t) => t.id === todoId);
      todo.isComplete = !todo.isComplete;
      this.setState({ todos });
   };
   toggleFormModal = () => {
      this.setState({ isTodoFormOpen: !this.state.isTodoFormOpen });
   };

   createTodo = (todo) => {
      todo.id = shortid.generate();
      todo.time = new Date();
      todo.isComplete = false;
      todo.isSelect = false;

      const todos = [todo, ...this.state.todos];
      this.setState({ todos });
      this.toggleFormModal();
   };
   handleSearch = (value) => {
      this.setState({ searchTerm: value });
   };
   performSearch = () => {
      return this.state.todos.filter((todo) =>
         todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
   };
   handleFilter = (filterValue) => {
      this.setState({ filter: filterValue });
   };
   performFilter = (todos) => {
      const filter = this.state.filter;
      if (filter === 'completed') {
         return todos.filter((todo) => todo.isComplete);
      } else if (filter === 'running') {
         return todos.filter((todo) => !todo.isComplete);
      } else {
         return todos;
      }
   };

   changeView = (event) => {
      this.setState({
         view: event.target.value,
      });
   };

   getView = () => {
      let todos = this.performSearch();
      todos = this.performFilter(todos);
      return this.state.view === 'list' ? (
         <ListView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
         />
      ) : (
         <TableView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
         />
      );
   };

   clearSelected = () => {
      const todos = this.state.todos.filter((todo) => !todo.isSelect);
      this.setState({ todos });
   };
   clearCompleted = () => {
      const todos = this.state.todos.filter((todo) => !todo.isComplete);
      this.setState({ todos });
   };
   reset = () => {
      this.setState({
         filter: 'all',
         searchTerm: '',
         view: 'list',
         isTodoFormOpen: false,
      });
   };

   render() {
      return (
         <div>
            <h1 className='display-4 text-center mb-5'>Stack Todos</h1>
            <Controller
               term={this.state.searchTerm}
               view={this.state.view}
               toggleFormModal={this.toggleFormModal}
               handleSearch={this.handleSearch}
               handleFilter={this.handleFilter}
               changeView={this.changeView}
               clearCompleted={this.clearCompleted}
               clearSelected={this.clearSelected}
               reset={this.reset}
            />
            <div>{this.getView()}</div>
            <Modal
               isOpen={this.state.isTodoFormOpen}
               toggle={this.toggleFormModal}
            >
               <ModalHeader toggle={this.toggleFormModal}>
                  Create New Todo Item
               </ModalHeader>
               <ModalBody>
                  <CreateTodoForm createTodo={this.createTodo} />
               </ModalBody>
            </Modal>
         </div>
      );
   }
}
