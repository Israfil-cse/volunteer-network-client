import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Components/Registers/Register';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import UserInfoData from './Components/UserInformation/UserInfoData';
import AddService from './Components/AddService/AddService';
import AdminPanel from './Components/AdminPanel/AdminPanel';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
           <HomePage></HomePage>
          </Route>
          <Route exact path="/">
          <HomePage></HomePage>
          </Route>
          <PrivetRoute path="/CategoryDetails/:CategoryDetails_id">
            <CategoryDetails></CategoryDetails>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/userinfo">
          <UserInfoData></UserInfoData>
          </Route>
          <PrivetRoute path="/register">
            <Register></Register>
          </PrivetRoute>
          <PrivetRoute path="/adminPanel">
            <AdminPanel></AdminPanel>
          </PrivetRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;