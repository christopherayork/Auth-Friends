import React, { useState } from 'react';
import { axiosWithAuth } from "./axiosWithAuth";

export default function AddFriend(props) {
  const [values, setValues] = useState({});

  const handleUpdates = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const submit = e => {
    e.preventDefault();
    const friend = {name: values.name, age: values.age, email: values.email};
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
        .then(res => {
          console.log(res.data);
          props.history.push('/friends');
        });
  };

  return (
      <div>
        <form name='AddFriend'>
          <input name='name' placeholder='Name' value={values.name} onChange={handleUpdates} />
          <input name='age' placeholder='Age' value={values.age} onChange={handleUpdates} />
          <input name='email' placeholder='Email' value={values.email} onChange={handleUpdates} />
          <button onClick={submit}>Add Friend</button>
        </form>
      </div>
  );

}