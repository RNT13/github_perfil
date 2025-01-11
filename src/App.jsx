import { useState } from "react";

import Perfil from "./Components/Perfil";
import ReposList from "./Components/ReposList";

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <input
        className={`barraPesquisa ${userName.length > 4 ? 'invisible' : ''}`}
        type="text"
        onBlur={(e) => setUserName(e.target.value)}
      />

      {userName.length > 4 && (
        <div>
          <Perfil userName={userName} />
          <ReposList userName={userName} />
        </div>
      )}
    </div>
  );
}

export default App;
