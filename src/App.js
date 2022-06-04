
import {Link , BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import {useState} from "react";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Users from "./components/Users/Users";
import './App.css'
import UserDetails from "./components/Users/UserDetails";

function App() {
    const [ phone , setPhone] = useState('+77051190835');

    // const fonPicture = new URL("./images/wp4923981.webp", import.meta.url)
    // const Style = {
    //     position: "absolute",
    //     opacity: "0%",
    //     background: "red",
    //     backgroundImage: fonPicture
    // }

    return (
        <Router>
            {/*<div>*/}
            {/*    <img style={Style} src={fonPicture}/>*/}
            {/*</div>*/}
            <div>
            <header>

                <nav>
                    <Link to="/">Домой</Link> &nbsp; | &nbsp;
                    <Link to="/about">О нас</Link> &nbsp; | &nbsp;
                    <Link to="/contacts">Контакты</Link> &nbsp; | &nbsp;
                    <Link to="/products">Продукты</Link> &nbsp; | &nbsp;
                    <Link to="/users">Пользователи</Link> &nbsp; | &nbsp;
                </nav>
                <span>
              phone: {phone}
          </span>
            </header>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id/" element={<ProductDetails/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:id/" element={<UserDetails/>}/>
            </Routes>
            </div>
        </Router>
    );
}

export default App;