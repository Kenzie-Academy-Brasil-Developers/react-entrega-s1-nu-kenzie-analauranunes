import "./style.css";
import NuKenzie from "../../images/NuKenzie.svg";

export const HomePage = ({ setHome }) => {
  return (
    <>
      <div className="home-div">
        <div className="infoNK-div">
          <h2 className="titleNK-h2">
            Nu <span className="kenzie-span">Kenzie</span>
          </h2>
          <p className="textNK-p">Centralize o controle das suas finanças</p>
          <p className="span-p">de forma rápida e segura</p>
          <button onClick={() => setHome(false)} className="initiate-button">
            Iniciar
          </button>
        </div>
        <div className="img-div">
          <img className="logo-img" src={NuKenzie} alt="logo nu-kenzie" />
        </div>
      </div>
    </>
  );
};
