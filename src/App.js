import React from 'react'
import { Link, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import UsersList from './UsersList'
import UserShow from './UserShow'

const App = (props) => {

  return (
    <div>
      <h1>React Routing</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/users">UsersList</Link></li>
        


      </ul>
    <Route path="/contact" component={Contact} exact={true} />
      <Route path="/about" component={About} exact={true} />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/users" component={UsersList} exact={true} />
      <Route path="/users/:id" component={UserShow} exact={true} />
    </div>
  )
}

export default App;
