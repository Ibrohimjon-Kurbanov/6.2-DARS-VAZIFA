import "./index.css";

function Adress({ address }) {
  const { region, zip } = address;
  return (
    <div className="adress">
      <h3 className="adress-title">Address</h3>
      <ul className="adress-list">
        <li className="adress-item">Region: {region}</li>
        <li className="adress-item">Zip-code: {zip} </li>
      </ul>
    </div>
  );
}

export default Adress;
