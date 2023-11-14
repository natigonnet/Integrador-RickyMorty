import axios from "axios";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
// import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  // en el CP react.useState() otra forma
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const APIKEY = "pi-natigonnet";

  const onSearch = (id) => {
    // setCharacters([...characters, example])
    // console.log(`Buscando personaje con ID: ${id}`);
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          window.alert("Personaje no encontrado");
        }
      })
      .catch((error) => console.log(error));
    // }).catch(error => window.alert(error.message))
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        {/* <Route path="/" element={<Form />} /> */}
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
