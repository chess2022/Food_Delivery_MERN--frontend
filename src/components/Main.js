import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import SignUpForm from "../pages/Signup"
import Login from "../pages/Login"
import Restaurants from "../pages/Restaurants"
import Menu from "../pages/Menu"
import Order from "../pages/Order"
import Dash from "../pages/Dashboard"

export default function Main(props) {
  const [users, setUsers] = useState(null)
  const [restaurants, setRestaurants] = useState(null)
  const [orders, setOrders] = useState(null)
  
  const URL = "https://cw-food-delivery-mern.herokuapp.com/"

  const getUsers = async () => {
    const data = await fetch(URL).then(res => res.json())
    setUsers(data)
  }
  
  const createUsers = async (user) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }
  const updateUsers = async (user, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }

  const deleteUsers = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    })
    getUsers()
  }

  const getRestaurants = async () => {
    const data = await fetch(URL).then(res => res.json())
    setRestaurants(data)
  }

  const getOrders = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setOrders(data);
  };

  const createOrders = async (user) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });
    getOrders();
  };

  useEffect(() => {getUsers()}, [])
  useEffect(() => {getRestaurants()}, [])
  useEffect(() => {getOrders()}, [])

  

  return (
  <main>
      <Routes>
        <Route path="/" element={<Login 
          users={users}/>} /> 
        <Route path="/signup" element={<SignUpForm
          users={users}
          createUsers={createUsers} />} />
        <Route path="/login" element={<Login
          user={users} />} />
        < Route exact path="/user" element={<Dash
          users={users}
          orders={orders} />} />
        <Route path="/restaurants" element={<Restaurants
          restaurants={restaurants} />} />
        <Route path="/restaurants/:id" element={<Menu
          restaurants={restaurants} />} />
        <Route path="/order" element={<Order
          orders={orders}
          createOrders={createOrders} />} />
        <Route exact path="/user/:id" element={<Dash
          users={users}
          updateUsers={updateUsers}
          deleteUsers={deleteUsers} />} /> 
      </Routes>
  </main>
  )
}