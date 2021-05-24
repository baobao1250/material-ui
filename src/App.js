
import './App.css';
import SearchList from './components/SearchList';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import Dialog from './components/Dialog';
import React from 'react';
import CBox from './components/CheckBox';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


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



  //list
  function handleTodoClick(todo) {

    console.log(todo);
  }

  return (
    <div className="App">
      <SearchList onSubmit={handleFiltersChange} />
      <CBox />
      <Dialog />
      <TodoList todos={todolist} onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
