import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const filterEntry = listTransactions.filter((el) => el.type === "Entrada");

  const filterExpenses = listTransactions.filter((el) => el.type === "Despesa");

  const totalEntry = filterEntry.reduce(
    (lastValue, currValue) => lastValue + currValue.value,
    0
  );

  const totalExpenses = filterExpenses.reduce(
    (lastValue, currValue) => lastValue + currValue.value,
    0
  );

  const totalValue = totalEntry - totalExpenses;

  return (
    <>
      <div className="valuesTotal-div">
        <div className="total-div">
          <h3 className="total-h3">Valor total:</h3>
          <p className="total-p">O valor se refere ao saldo</p>
        </div>
        <div className="totalValue-div">
          <p className="totalValue-p">$ {totalValue}</p>
        </div>
      </div>
    </>
  );
};
