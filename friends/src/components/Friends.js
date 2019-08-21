import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "./axiosWithAuth";

const Friend = ({ friend }) => {
  return (
      <div>
        <ul>
          <li>Name: {friend.name}</li>
          <li>Age: {friend.age}</li>
          <li>Email: {friend.email}</li>
        </ul>
      </div>
  );
};

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
          setFriends(res.data);
        })
        .catch(e => console.log(e));
  }, []);

  return (
      <div>
        {friends.map(f => <Friend key={f.id} friend={f} />)}
      </div>
  );
}
