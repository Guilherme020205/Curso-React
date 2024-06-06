import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario ${nome} foi cadastrado com a senha ${senha}`);
  }

  const[nome, setNome] = useState('Raydner')
  const[senha, setSenha] = useState(' ')
  
  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="digite o seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="text"
            id="senha"
            name="senha"
            placeholder="Digite a sua senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
