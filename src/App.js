import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState([]);
  const [home, setHome] = useState(true);

  const handleErase = (item) => {
    const filteredTransaction = listTransactions.filter((el) => el !== item);
    setListTransactions(filteredTransaction);
  };

  const filtersList = (typeFIlter) => {
    const newList =
      typeFIlter === "Todos"
        ? []
        : listTransactions.filter((el) => el.type === typeFIlter);
    setFilter(newList);
  };

  return (
    <>
      {home ? (
        <HomePage setHome={setHome} />
      ) : (
        <>
          <Header>
            <div className="nu-div">
              <h1 className="nu-h1">
                Nu <span className="nu-span">Kenzie</span>
              </h1>
            </div>
            <div className="button-div">
              <button onClick={() => setHome(true)} className="home-button">
                Início
              </button>
            </div>
          </Header>
          <div className="divide-div">
            <div className="form-totalValue">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div className="cardHome-div">
              <Card
                listTransactions={listTransactions}
                handleErase={handleErase}
                filtersList={filtersList}
                filter={filter}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
