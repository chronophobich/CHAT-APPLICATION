import { Routes, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import Home from "./components/Home";


function App() {
  return (
    <Routes>
      <Route path = "/api.chats" element = {<ChatPage />} />
      <Route path = "/" element = {<Home />} />
      <Route path = "/chats" element = {<Chat />} />
    </Routes>
    );
}

export default App;
