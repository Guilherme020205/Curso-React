import ItemList from "./ItemList";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <ItemList/>
        <ItemList marca="VW" lancamento={1988} />
      </ul>
    </>
  );
}

export default List;
