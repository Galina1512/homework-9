import './App.css';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {

  state={
users: []
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users ")
    .then(res=>{
      const users = res.data;
      this.setState({users}) 
      // console.log(users)
    })
  }
  render(){
  return (
    <div className="App">
    {this.state.users.map(users=>
    <div key={users.id}>
    <h3>{users.name}</h3>
    <p><span>e-mail  </span>{users.email}</p>
    <p><span>Address  </span>{users.address.city}</p>
    <p>{users.address.street}</p>
    <p><span>Phone  </span>{users.phone}</p>
    <p><span>Webside  </span>{users.website}</p>
    </div>
    )}
    </div>
  );
}
}
export default App;
