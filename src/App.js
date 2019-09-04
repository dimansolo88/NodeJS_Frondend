import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {

    const userNameRef = React.createRef();

    const [users, setUsers] = useState([]);

    const getUsers = () => {

        axios.get("http://localhost:7743/users").then(response => {
                setUsers(response.data)
            }
        )

    }

    useEffect(() => {

        getUsers()


    }, []);


    const addNewUser = () => {

        axios.post("http://localhost:7743/users", {data:userNameRef.current.value })
            .then(response => {
                    getUsers()
                }
            )
    };


    return (

        <div>

            <input type="text" ref={userNameRef}/>

            <div>

                <button onClick={addNewUser}> add new</button>

            </div>
            {users.map(u =>
                <div>{u.name}</div>
            )}
        </div>

    );
}

export default App;
