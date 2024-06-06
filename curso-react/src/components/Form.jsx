function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log("User cadastrado");
  }

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="digite o seu nome" />
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
