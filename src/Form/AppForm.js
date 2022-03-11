import { useState } from 'react';

export default function AppForm() {
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });

  const handelSubmit = e => {
    e.preventDefault();
    console.log(userData.userName, userData.password);
  };

  const handelChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handelSubmit} action='' method='post'>
      <input
        type='text'
        name='userName'
        placeholder='User Name'
        value={userData.userName}
        onChange={handelChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={userData.password}
        onChange={handelChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
