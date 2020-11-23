import React, {useEffect, useState} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('/api/values').then((response) => {
      console.log('response get', response);

      setLists(response.data);
    });
  }, []);

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', {value}).then((response) => {
      if (response.data.success) {
        console.log('response post', response);

        setLists([...lists, response.data]);
        setValue('');
      } else {
        alert('데이터 넣는데 실패함');
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {lists &&
            lists.map((list, index) => (
              <li key={`${index + 1}`}>{list.value}</li>
            ))}

          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해주세요..."
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
