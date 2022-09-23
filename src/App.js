import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/users" element={<UserList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
