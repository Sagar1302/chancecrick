import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import { useState } from 'react';

import './App.css';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('totolist')));//JSON.parse(localStorage.getItem('totolist'))
   //  A new hook usestate is created to store and display the todo List

  const [newItem, setNewItem] = useState('')
  // A new hook useState is created to get the input data from the user and add it to the extisting useState


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;//a variable id is created to store the id of the new id of the input
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem('totolist', JSON.stringify(items));
  }
  //the addItem function is used to get input from the user and  add it to the local storage through the useState


  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('totolist', JSON.stringify(items));
  }
  // the handleCheck function is used to check the checkbox


  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);// using filter function the particular id is removed from the usestate
    setItems(listItems);
    localStorage.setItem('totolist', JSON.stringify(items));
  }
  // handleDelete function is used to delete the completed tasks


  const handleSubmit = (e) => {
    e.preventDefault();//preventDefault is used to prevent the refresh the page 
    if (!newItem) return;// if thre is no input given and submit button is activated or when there is no input value it returns nothing to the useState
    addItem(newItem);
    setNewItem('');
    localStorage.setItem('totolist', JSON.stringify(items));

  }
  //handleSubmit function is used to submit the input data to the useState

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    
    </div>
  );
}

export default App;