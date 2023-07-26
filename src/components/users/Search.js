import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;
  const alertContext = useContext(AlertContext);

  const [ text, setText ] = useState('');

  // Form Submit
  const onSubmit = (e) => {
    e.preventDefault();

    if(text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      // Reset form
      setText('');
    }
  }

  // Updates state for input based on input "name" property
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={ onSubmit } className="form">
        <input 
          type="text" 
          name="text" 
          placeholder="Search Users..." 
          value={ text } 
          onChange={ onChange }
        />
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-dark btn-block" 
        />
      </form>
      {users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
    </div>
  )
}


export default Search