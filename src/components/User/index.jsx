import "./index.css";

function User(props) {
  const { image, firstName, lastName, phone, email } = props;
  return (
    <div className="card">
      <img src={image} alt="User Avatar" />
      <div className="card-info">
        <h3 className="card-name">
          {firstName} {lastName}
        </h3>
        <h3 className="card-phone">Telefon: {phone}</h3>
        <h3 className="card-email">Email: {email}</h3>
      </div>
    </div>
  );
}

export default User;
