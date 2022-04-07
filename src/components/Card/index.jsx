import "./style.css";

export const Card = ({
  listTransactions,
  handleErase,
  filtersList,
  filter,
}) => {
  return (
    <>
      <div className="card-div">
        <div className="resumeButton-div">
          <div className="resume-div">
            <h3 className="resume-h3">Resumo financeiro</h3>
          </div>
          <div className="buttonsUl-div">
            <button
              className="buttons all-button"
              onClick={() => filtersList("Todos")}
            >
              Todos
            </button>
            <button
              className="buttons entry-button"
              onClick={() => filtersList("Entrada")}
            >
              Entradas
            </button>
            <button
              className="buttons expenses-button"
              onClick={() => filtersList("Despesa")}
            >
              Despesas
            </button>
          </div>
        </div>
        {listTransactions.length !== 0 ? (
          <ul className="card-ul">
            {filter.length > 0
              ? filter.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        el.type === "Entrada"
                          ? "card-li entry-li"
                          : "card-li expense-li"
                      }
                    >
                      <div className="cardInfo-div">
                        <div>
                          <h3 className="card-h3">{el.description}</h3>
                        </div>
                        <div className="valueButton-div">
                          <p className="cardValue-p">R$ {el.value}</p>
                          <button
                            onClick={() => handleErase(el)}
                            className="trash-button"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                      <p className="typeCard-p">{el.type}</p>
                    </li>
                  );
                })
              : listTransactions.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        el.type === "Entrada"
                          ? "card-li entry-li"
                          : "card-li expense-li"
                      }
                    >
                      <div className="cardInfo-div">
                        <div>
                          <h3 className="card-h3">{el.description}</h3>
                        </div>
                        <div className="valueButton-div">
                          <p className="cardValue-p">R$ {el.value}</p>
                          <button
                            onClick={() => handleErase(el)}
                            className="trash-button"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                      <p className="typeCard-p">{el.type}</p>
                    </li>
                  );
                })}
          </ul>
        ) : (
          <div className="noTransaction-div">
            <p className="noTransaction-p">
              Você ainda não possui nenhum lançamento
            </p>
          </div>
        )}
      </div>
    </>
  );
};
