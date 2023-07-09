import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [dataInput, setInput] = useState<string>();

    const getData = () => {
        const data = localStorage.getItem("test");
        if (!data) {
            alert("Нет данных");
        } else {
            alert(data);
        }
    };

    const writeData = () => {
        if (dataInput) {
            localStorage.setItem("test", dataInput);
            alert("Данные записаны");
            setInput("");
        } else {
            alert("Нет данных для записи");
        }
    };

    return (
        <div style={{ marginTop: "40px", justifyContent: "space-around", display: "flex", flexWrap: "wrap", width: "90%", margin: "auto" }}>
            <div>
                <input type="text" value={dataInput} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => getData()}>Получить данные</button>
                <button onClick={() => writeData()}>Записать данные</button>
            </div>
        </div>
    );
}

export default App;
