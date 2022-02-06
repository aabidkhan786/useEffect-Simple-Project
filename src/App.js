import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  //we create a getUsers function for fetching the details from given API and set that details into the defined state array function.
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  }
  
  //useEffect call the getUsers() function for everytime the components in the page get rendered.
  // useEffect(() => {
  //   getUsers();
  // })

  //In this useEffect() call the getUsers() function for the first time only.
  useEffect(() => {
    getUsers();
  },[])

  // useEffect call the getUsers() function for the specific updation of component. 
  // useEffect(() => {
  //   getUsers();
  // },[users])

  return (
    <div className="container text-center">
      <h1 className='mt-3'>useEffect React Hooks</h1>
      <div className='row'>
        
        {/* we call for a map function for every time the data is available in the given array. */}
        {
          users.map((currendata) => {
            return (
              <div className="col-md-4 mt-5" key={currendata.id}>
                <div className="card card-profile">
                  <div className="card-avatar">
                    <a href={currendata.avatar_url}><img className="img" src={currendata.avatar_url} alt={currendata.login} /> </a>
                  </div>
                  <div className="table">
                    <h5 className="card-caption">username: {currendata.login}</h5>
                    <a href={currendata.html_url}><h6 className="category text-muted">github id: {currendata.html_url}</h6></a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
