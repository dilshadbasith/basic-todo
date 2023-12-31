import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if(!newItem){
      alert("add an item")
      return
    }
    const todo = { id: Date.now(), value: newItem };
    setItems((oldLists) => [...oldLists, todo]);
    setNewItem("");
  };

  const deleteTodo=(id)=>{
    const newArr=items.filter(item=>item.id!==id)
    setItems(newArr)
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        required
      />
      <button onClick={addItem} className="button">ADD</button>

      <ul>
        {items.map((item)=>{
          return <li key={item.id} className="list">
            {item.value}&nbsp;&nbsp;
            <button className="dlt" onClick={()=>deleteTodo(item.id)}>❌</button>
          </li>
        })}
      </ul>
    </>
  );
}

export default App;
