import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'
import Login from './components/Login'
function App() {
   return (
    <BrowserRouter>
    <div className="container">
      <h3>Item list CRUD example using axios</h3>
        <div className="nav navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/additem">Add Item</Link></li>
             <li><Link to="/listitem">List Item</Link></li>
             <li><Link to="/login">Login</Link></li>

          </ul>
       </div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/additem" element={<AddItem />} />
              <Route path="/listitem" element={<ListItem />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
