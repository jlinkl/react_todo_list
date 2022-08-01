import {useState} from 'react'
import './App.css';

function App() {

  const [items, setItems] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ])


  const deleteItem = (event, index) => {
    event.preventDefault();
    const copyItems =[...items];
    copyItems.splice(index, 1);
    setItems(copyItems);
  }

  const [newItem, setNewItem] = useState("", "")
  const itemNodes = items.map((item, index) => {
    return (
      <li key={index} className={(item.priority === "high") ? "high" : "low"}>
        <span>
          {item.name}
        </span>
        {(item.priority === "high") ? <span className="high">High</span> : <span className="low">Low</span>}
        <form onSubmit={deleteItem}>
          <input type="submit" value="Delete"></input>
        </form>
      </li>
    )
  })

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }

  const saveItem = (event) => {
    event.preventDefault();
    const copyItems = [...items];
    copyItems.push({name: newItem, priority: event.target.priority.value});
    setItems(copyItems);
    setNewItem("")
  }


  return (
    <div className="ToDo">
      <h1>To Do List</h1>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveItem}>
        <label htmlFor="new-item">Add new item: </label>
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}></input>
        <input type="radio" id="low" name="priority" value="low"></input>
        <label htmlFor="low">Low</label>
        <input type="radio" id="high" name="priority" value="high"></input>
        <label htmlFor="high">High</label>  
        <input type="submit" value="Save new item"/>
      </form>


    </div>
  );
}

export default App;
