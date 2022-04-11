import { useState } from "react";
import "./style.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Entrada");

  const handleSubmit = () => {
    const dataTransaction = {
      description: description,
      type: type,
      value: Number(value),
    };

    setListTransactions([...listTransactions, dataTransaction]);
  };

  return (
    <>
      <form
        className="transaction-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="description" className="description-label">
          Descrição
        </label>
        <input
          className="description-input"
          type="text"
          name="description"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <p className="example-p">Ex.: Compra de roupas</p>
        <div className="values-div">
          <div className="howMuch-div">
            <label htmlFor="value" className="value-label">
              Valor
            </label>
            <input
              className="value-input"
              type="text"
              name="value"
              placeholder="1 R$"
              onChange={(event) => setValue(event.target.value)}
              required
            />
          </div>
          <div className="typesValue-div">
            <label htmlFor="type" className="type-label">
              Tipo de valor
            </label>
            <select
              className="type-select"
              name="type"
              onChange={(event) => setType(event.target.value)}
              required
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Saída</option>
            </select>
          </div>
        </div>
        <div className="buttonForm-div">
          <button className="form-button" onClick={() => handleSubmit()}>
            Inserir valor
          </button>
        </div>
      </form>
    </>
  );
};
