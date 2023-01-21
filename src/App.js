import './App.css';
import { createUser, signInUser } from './backend/firebaseauth';


function App() {
  return (
    <div className="App">
      <form>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
      </form>
      <button onClick={() => createUser(
        document.getElementsByTagName("input")[0].value,
        document.getElementsByTagName("input")[1].value
      )}>Create User</button>
    </div>
  );
}

export default App;
