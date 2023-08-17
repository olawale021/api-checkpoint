import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setListOfUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
        <h1 style={{color: 'red', textAlign: 'center', paddingTop: '15%' }}>User List Generated from API</h1>
        <ul>
            {listOfUsers.map(user => (
            <li style={{color: 'blue', textAlign: 'center'}} key={user.id}>{user.name} Email:{user.email}</li>
            ))}
        </ul>
        </div>
    );
}

export default UserList;
