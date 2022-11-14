import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const employeeData = {
    name: name,
    age: age,
    country: country,
    position: position,
    wage: wage,
  };
  const addEmployee = () => {
    Axios.post('//localhost:3003/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([...employeeList, employeeData]);
    });
  };

  const getEmployees = () => {
    Axios.get('//localhost:3003/employees').then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <label>Age:</label>
        <input type="number" onChange={(event) => setAge(event.target.value)} />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => setCountry(event.target.value)}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => setPosition(event.target.value)}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => setWage(event.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <br />
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>
      </div>
      <center>
        {employeeList.map((data, key) => {
          return (
            <div className="employee" key={key}>
              <h3>{data.name}</h3>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
