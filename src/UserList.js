import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


function UserList() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUserList(res.data);
        })
    });
    const list = userList.map((user) =>
        <div className="cont" >
            <p>id : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>UserName :  {user.username}</p>
            <p>E-mail :  {user.email}</p>
            <p>address :  {user.address.street}</p>
            <p>suite :  {user.address.suite}</p>
            <p>city :  {user.address.city}</p>
            <p>zipcode :  {user.address.zipcode}</p>
            <p>geo :</p>
            <p>lat :  {user.address.geo.lat}</p>
            <p>lng:  {user.address.geo.lng}</p>

            <hr></hr>
        </div>
    );
    return (<div>{list}</div>)
}

export default UserList
