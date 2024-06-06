import PropTypes from 'prop-types'

function ItemList({marca, lancamento}) {

return(

    <>
        <li>{marca} - {lancamento}</li>
    </>

);
}

ItemList.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired
}
ItemList.defaultProps = {
    marca: "Vazio",
    lancamento: 0
}

export default ItemList 