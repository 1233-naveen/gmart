import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Counter from "./components/Counter";
import Upload from "./components/Upload";
import Login from "./components/Login";
import MyComponent from "./components/Class-Components";
import NewItem from "./components/NewItem";
import Item from "./components/Item";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Counter/>} />
            <Route path="store" element={<Market />} />
            <Route path="store/:id" element={<Item/>} />
            <Route path="upload" element={<Upload/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="myclass" element={<MyComponent/>}/>
            
          </Route>
          <Route path="/testing" element={<NewItem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
