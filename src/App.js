import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/HomeCompo/Home/Home";
import AddServices from './Components/Admin/AddServices/AddServices';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import OrderList from './Components/Admin/OrderList/OrderList';
import Book from './Components/User/Book/Book';
import BookingList from './Components/User/BookingList/BookingList';
import Review from './Components/User/Review/Review';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addService">
          <AddServices />
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin />
        </Route>
        <Route path="/orderList">
          <OrderList />
        </Route>
        <Route path="/book">
          <Book></Book>
        </Route>
        <Route path="/bookingList">
          <BookingList />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
