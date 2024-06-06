function Lista2({ itens }) {
  return (
    <>
      <h3>Lista</h3>
      {itens.lenght > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>não a itens na lista</p>
      )}
    </>
  );
}

export default Lista2;
