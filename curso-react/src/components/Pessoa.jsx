// function Pessoa(props) {
//     return <div>
//         <img src={props.foto} alt={props.nome}/>
//         <h2>Nome: {props.nome}</h2>
//         <h2>Idade: {props.idade}</h2>
//         <h2>Profissao: {props.profissao}</h2>
//     </div>
// }

// export default Pessoa


// **************  ou

function Pessoa({ foto, nome, idade, profissao }) {
    return <div>
        <img src={foto} alt={nome} />
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
    </div>
}

export default Pessoa