import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  // en el CP react.useState() otra forma
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const APIKEY = "pi-natigonnet";
  const EMAIL = "natigonnet@gmail.com";
  const PASSWORD = "hola123";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Datos incorrectos. Intenta nuevamente.");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    // axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          window.alert("Personaje no encontrado");
        }
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} onLogout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
