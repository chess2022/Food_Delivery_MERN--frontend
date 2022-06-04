import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import SignUpForm from "../pages/Signup"
import Login from "../pages/Login"
import Restaurants from "../pages/Restaurants"
import Menu from "../pages/Menu"
import Order from "../pages/Order"
import Success from "../pages/Success"

export default function Main(props) {
  const [users, setUsers] = useState(null)
  const [restaurants, setRestaurants] = useState(null)
  const [orders, setOrders] = useState(null)
  const [menu, setMenu] = useState(null)
  
  const URL = "https://cw-food-delivery-mern.herokuapp.com/"


  const getUsers = async () => {
  const data = await fetch(URL + 'users').then(res => res.json())
  setUsers(data)
  }

  const createUsers = async (user) => {
    await fetch(URL + 'users', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }
  console.log(URL + 'users')

  const updateOrders = async (order, id) => {
    await fetch(URL + 'order/' + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(order)
    })
    getOrders()
  }

  const deleteOrders = async (id) => {
    await fetch(URL + 'order/' + id, {
      method: "DELETE",
    })
    getOrders()
  }

  const getRestaurants = async () => {
    const data = await fetch(URL + 'restaurants').then(res => res.json())
    setRestaurants(data)
  }

  const getOrders = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setOrders(data);
  };

  const createOrders = async (order) => {
    await fetch(URL + 'order', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(order),
    });
    getOrders();
  };

  const getMenu = async (id) => {
    const data = await fetch(URL + 'restaurant/' + id).then(res => res.json())
    setMenu(data.menuItem)
  }



  useEffect(() => {getUsers()}, [])
  useEffect(() => {getRestaurants()}, [])
  useEffect(() => {getOrders()}, [])
  useEffect(() => {getMenu()}, [])

  

  return (
  <main>
      <Routes>
        <Route path="/" element={<Login 
          users={users}
          getUsers={getUsers} />} /> 
        <Route path="/signup" element={<SignUpForm
          users={users}
          createUsers={createUsers} />} />
        <Route path="/login" element={<Login
          user={users} />} />
        <Route path="/success" element={<Success/>} />
        {/* <Route path="/user" element={<Dash
          users={users}
          orders={orders} />} /> */}
        <Route path="/restaurants" element={<Restaurants
          restaurants={restaurants} />} />
        <Route path="/restaurants/:id" element={<Menu
          restaurants={restaurants}
          menu={menu} />} />
        <Route path="/order" element={<Order
          orders={orders}
          createOrders={createOrders} />} />
        <Route path="/order/:id" element={<Order
          orders={orders}
          updateOrders={updateOrders}
          deleteOrders={deleteOrders} />} /> 
      </Routes>
  </main>
  )
}
