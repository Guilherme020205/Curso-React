import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
  }

  function limparEmail(e) {
    setUserEmail("")
  }

  return (
    <div>
      <h2>Cadastre seu email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
            <div>
                <p>O email do usuario é: {userEmail}</p>
                <button type="submit" onClick={limparEmail}>Limpar E-mail</button>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
