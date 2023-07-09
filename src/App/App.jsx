import "./App.css";
import { useEffect, useState } from "react";

const itemsLocalstorage = () => {
    const items = localStorage.getItem("items");
    console.log(JSON.parse(items));
    if (items) return JSON.parse(items);
    else return undefined;
};

const getData = () => {
    const data = localStorage.getItem("test");
    if (!data) {
        alert("Нет данных");
    } else {
        alert(data);
    }
};

const writeData = (dataInput) => {
    if (dataInput) {
        localStorage.setItem("items", dataInput);
        alert("Данные записаны");
        //setInput("");
    } else {
        alert("Нет данных для записи");
    }
};

const createNewItem = (value, addItem) => {
    if (value) {
        const newItem = {
            name: value,
            id: Date.now(),
        };
        let items = localStorage.getItem("items");
        if (items) {
            const newArr = JSON.stringify([...JSON.parse(items), newItem]);
            localStorage.setItem("items", newArr);
            addItem([...JSON.parse(items), newItem]);
        } else {
            localStorage.setItem("items", JSON.stringify([newItem]));
            addItem([newItem]);
        }
    } else {
        alert("Нет данных");
    }
};

const deleteItem = (id, updateItems) => {
    const items = JSON.parse(localStorage.getItem("items"));
    const newArr = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(newArr));
    updateItems(newArr);
};

const ItemList = ({ name, id, updateItems }) => {
    return (
        <div style={{ marginTop: "10px", padding: "10px" }}>
            <span>{name}</span>
            <button onClick={() => deleteItem(id, updateItems)}>Удалить</button>
        </div>
    );
};
function App() {
    const [dataInput, setInput] = useState();
    const [dataItems, setDataItems] = useState(itemsLocalstorage());

    console.log(dataItems);

    return (
        <div style={{ marginTop: "40px", justifyContent: "space-around", width: "90%", margin: "auto" }}>
            <div>
                <input type="text" value={dataInput} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => createNewItem(dataInput, setDataItems)}>Создать</button>
            </div>
            <div style={{ marginTop: "20px", padding: "10px" }}>
                {dataItems
                    ? dataItems.map((item) => {
                          return <ItemList key={item.id} id={item.id} name={item.name} updateItems={setDataItems} />;
                      })
                    : null}
            </div>
        </div>
    );
}

export default App;
