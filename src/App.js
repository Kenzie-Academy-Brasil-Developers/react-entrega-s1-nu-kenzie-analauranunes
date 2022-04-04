import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Card } from "./components/Card";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const handleErase = (item) => {
    const filteredTransaction = listTransactions.filter((el) => el !== item);
    setListTransactions(filteredTransaction);
  };

  // const filters = (classList) => {
  //   if (classList.classList === "entry-button") {
  //     const entry = listTransactions.filter((el) => el.type === "Entrada");
  //     setListTransactions(entry);
  //   } else if (classList.classList === "expenses-button") {
  //     const expense = listTransactions.filter((el) => el.type === "Despesa");
  //     setListTransactions(expense);
  //   } else if (classList.classList === "all-button") {
  //     setListTransactions([...listTransactions]);
  //   }
  // };

  return (
    <>
      <header className="nu-header">
        <div className="nu-div">
          <h1 className="nu-h1">
            Nu <span className="nu-span">Kenzie</span>
          </h1>
        </div>
        <div className="button-div">
          <button className="home-button">Início</button>
        </div>
      </header>
      <div className="divide-div">
        <div className="form-totalValue">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="cardHome-div">
          <Card listTransactions={listTransactions} handleErase={handleErase} />
        </div>
      </div>
    </>
  );
}

export default App;
