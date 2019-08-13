import React, {useEffect, useState} from 'react';
import './App.css';
import  axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get("http://localhost:7742/users").then(response => {
          setUsers(response.data)
        }

    )

  }

  useEffect( () => {

    getUsers()



  }, [] );


  const addNewUser = () => {

    axios.post("http://localhost:7742/users")
        .then(response => {
      getUsers()
        }

    )
  };



  return (

      <div>

        <div>

          <button onClick={addNewUser}> add new </button>

        </div>
        {users.map(u =>
          <div>{u.name}</div>
        )}
      </div>

  );
}

export default App;
