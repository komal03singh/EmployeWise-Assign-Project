import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import EditUser from "./components/Edit/EditUser";


const App = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
    );
};

export default App;