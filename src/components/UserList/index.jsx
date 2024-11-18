import "./index.css";
import User from "../User/";

function UserList(props) {
  const { users } = props;
  return (
    <div className="wrapper">
      {users.map((user, index) => (
        <User {...user} key={index} />
      ))}
    </div>
  );    
}

export default UserList;
