import "./App.css";
import UserList from "./components/UserList";
// import UserList from './components/UserList'
import data from "./assets/data/users.json";
function App() {
  return (
    <div className="container">
      <UserList users={data}></UserList>
    </div>
  );
}

export default App;
