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