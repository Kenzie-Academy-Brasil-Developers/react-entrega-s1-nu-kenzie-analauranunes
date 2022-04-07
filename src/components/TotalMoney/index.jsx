import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const totalValue = listTransactions.reduce((lastValue, currValue) => {
    if (currValue.type === "Entrada") {
      return lastValue + currValue.value;
    } else {
      return lastValue - currValue.value;
    }
  }, 0);

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
