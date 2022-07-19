import { Routes, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import Home from "./components/Home";


function App() {
  return (
    <Routes>
      <Route path = "/" element = {<ChatPage />} />
    </Routes>
    );
}

export default App;
