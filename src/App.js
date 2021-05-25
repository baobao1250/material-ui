import './App.css';
import SearchList from './components/SearchList';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import React from 'react';
import CBox from './components/CheckBox';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Dialog } from '@material-ui/core';
import { SignalCellular0Bar } from '@material-ui/icons';


function App() {

  const [todolist, setTodoList] = useState([
    { id: 1, name: 'Cơ sở sản xuât', active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 2, name: 'Cơ sở kinh doanh', active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 3, name: 'Cơ sở vừa sản xuât vừa kinh doanh', active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
  ]);

  //  useEffect

  // useEffect(() => {
  //   const results =
  //     todolist.filter(todolist => todolist.name.toLowerCase().includes(SearchList));
  //   setTodoList(results);
  // }, [SearchList])

  //search

  function handleFiltersChange(newFilters) {
    console.log(newFilters);

  };

  //Add list
  function handleSubmit(FValues) {
    const newtodo = {
      id: todoList.length + 1,
      ...FValues,
    };
    const newTodoList = [...todoList]
    newTodoList.push(newtodo);
    setTodoList(newTodoList);
  }

  //list
  function handleTodoClick(todo) {

    console.log(todo);
  }

  return (
    <div className="App">
      <h2>Danh mục loại hình cơ sở</h2>
      <SearchList onSubmit={handleFiltersChange} />
      <CBox />
      <TodoList todos={todolist} onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
