import './App.css';
import Lista2 from './components/Lista2';
import Condicional from './components/Condicional';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';



function App() {
  const name = 'Guilherme'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const uril = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"

  const meusItens = ['React', 'Java', 'Css']

  return (
    <div className="App">
       <h1>Olá React</h1>
      <p>Um p aqui {newName}</p>
      <p>{sum(5, 2)}</p>
      <img src={uril} alt="Dog"/> 
      <HelloWord/> 
      <Frase/>
      <SayMyName nome="Matheus"/>
      <Pessoa 
      nome="Guilherme"
      idade="18"
      profissao="QA"
      foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
      />
      <List/>  
      <h1>Testando Eventos</h1>
      <Eventos numero={1}/>
      <Eventos numero={2}/>
      <Form/>
      <Condicional/>
      <Lista2 itens={meusItens}/>
      <Lista2 itens={[]}/>
       
    </div>
  );
}

export default App;
