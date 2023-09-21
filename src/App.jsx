import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Message from "./pages/Message";
import Analytics from "./pages/Analytics";
import FileManager from "./pages/FileManager";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Accordion from "./pages/Accordion";
const App = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Accordion />} />
            <Route path="/users" element={<User />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<> Not Found </>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
