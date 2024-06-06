function Eventos({numero}) {

    function meuEvento() {
        console.log(`Fui ativado ${numero}`)
    }


    return (
        <div>
            <p>Clique para disparar o evento</p>
            <button onClick={meuEvento}>Ativado!</button>
        </div>
    );
}

export default Eventos