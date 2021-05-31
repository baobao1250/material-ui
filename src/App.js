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
    { id: 1, name: 'Cơ sở sản xuât', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 2, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 3, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 4, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 5, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 6, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 7, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 8, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 9, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 10, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 11, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 12, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 13, name: 'Cơ sở kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
    { id: 14, name: 'Cơ sở vừa sản xuât vừa kinh doanh', description: "", active: <CheckOutlinedIcon />, quyen: <CreateOutlinedIcon /> },
  ]);

  const [filters, setFilters] = useState({

  })

  //  useEffect

  // useEffect(() => {
  //   const results =
  //     todolist.filter(todolist => todolist.name.toLowerCase().includes(SearchList));
  //   setTodoList(results);
  // }, [filters])

  //search

  function handleFiltersChange(newFilters) {
    console.log(newFilters);
    setFilters({
      ...filters,
      title_like: newFilters.SearchList,
    })
  };

  //Add list
  function handleSubmit(FValues) {
    const newtodo = {
      id: todolist.length + 1,
      ...FValues,
    };
    const newTodoList = [...todolist]
    newTodoList.push(newtodo);
    setTodoList(newTodoList);
  }


  //list
  function handleTodoClick(todo) {
    const index = todolist.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todolist];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

  }

  return (
    <div className="App">
      <h2>Danh mục loại hình cơ sở</h2>
      <SearchList onSubmit={handleFiltersChange} handleSubmit={handleSubmit} />
      <CBox />
      <TodoList todos={todolist} onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
