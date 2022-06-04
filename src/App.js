import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Login from './pages/Login';

export default function App() {
  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <Login />
  // }
  
  return (
    <div className="App">
      <Header /> 
      <Main />   
      <Nav />
    </div>
  );
}

