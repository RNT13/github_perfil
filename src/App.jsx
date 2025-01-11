import { useState } from "react";


import Perfil from "./Components/Perfil";
import ReposList from "./Components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [userName, setUserName] = useState('');
  return (
    <>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} />

      {userName.length > 4 && (
        <>
          <Perfil userName={userName} />
          <ReposList userName={userName} />
        </>
      )}
    </>
  )
}

export default App
