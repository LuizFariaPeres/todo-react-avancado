import {useContext, useState } from "react"
import Tarefa from "./Tarefa"
import useInput from "../hooks/useInput"
import Search from "./Search"
import { UseContext } from "../Context/UseContext";

export default function Todo (){


  const[list, setList] = useState([]);
  const[busca, setBusca] = useState('');
  const tarefa = useInput();
  const categoria = useInput("Estudos");
  const{user} = useContext(UseContext)
   const[isready, setIsReady] = useState(false);

  const termo = busca.toLowerCase().trim();
  

  
  const handleSubmit = (e) =>
    {
      e.preventDefault();

      if(tarefa.valor.trim() === '' || categoria.valor == ''){
        console.log('Campo obrigatório')
        console.log(categoria.valor)
        return
      }

      const novaTarefa = {text: tarefa.valor, category: categoria.valor, ready: false}

      setList([...list, novaTarefa])
      tarefa.clean();

      
    }
    
    const checkReady = (indexReady) =>{
      setList(prev => prev.map((item, index) => index === indexReady? {...item, ready: !item.ready}: item))
    }
    
    const remove = (indexRemove) => {
      setList(prev => prev.filter((_, index) => index !== indexRemove))
    }

    const listaFiltrada = list.filter((i) =>{
        const filtroTexto = i.text.toLowerCase().includes(termo) || i.category.toLowerCase().includes(termo);
      return filtroTexto
          
        

    })

    

  return(
    <div className="flex flex-col w-full m-2 justify-center items-center border-2 rounded-md bg-white">
        <h1 className="text-3xl font-bold">Olá, {user.name}!</h1>
        <Search busca={busca} setBusca={setBusca}/>
        
        
          <form className="flex flex-col m-2 gap-6 p-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite sua Tarefa"
            className="border-solid border-2 border-black rounded p-1.5"
            value={tarefa.valor}
            onChange={tarefa.onChange}
            />
            <div className="grid w-full gap-4">
              <button type="submit" className="border-solid border-2 border-none rounded p-1 bg-gray-400">Adicionar</button>
              <select value={categoria.valor} onChange={categoria.onChange}
              className="justify-self-end w-full rounded-md text-center bg-gray-400"
              >
                <option value="Estudos">Estudos</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
              </select>
              
            </div>
            <div className="p-4 w-96 h-80 border-solid border-2 border-black rounded-lg overflow-y-auto">
              <ul className="flex flex-col items-center">
                {listaFiltrada.map((item, index) =>(
                  <Tarefa key={index} text={item.text} category={item.category} onDelete={()=> remove(index)} ready={item.ready} onReady={() => checkReady(index)}/>
                ))}
              </ul>
            </div>
          </form>
        

    </div>
  )
}