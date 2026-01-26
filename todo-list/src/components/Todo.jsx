import {useContext, useState } from "react"
import Tarefa from "./Tarefa"
import useInput from "../hooks/useInput"
import Search from "./Search"
import { UseContext } from "../Context/UseContext";

export default function Todo (){


  const[list, setList] = useState([]);
  const[busca, setBusca] = useState('');
  const tarefa = useInput();
  const categoria = useInput("")
  const{user} = useContext(UseContext)

  const termo = busca.toLowerCase().trim();
  

  
  const handleSubmit = (e) =>
    {
      e.preventDefault();
      console.log(tarefa.valor, categoria.valor)
  

      if(tarefa.valor.trim() === '' || categoria.valor === ''){
        alert('Campo obrigatório')
        return
      }

      const novaTarefa = {text: tarefa.valor, category: categoria.valor, concluida: false}

      setList([...list, novaTarefa])
      tarefa.clean();


    }

    const remove = (indexRemove) => {
      setList(prev => prev.filter((_, index) => index !== indexRemove))
    }

    const listaFiltrada = list.filter((i) =>{
        const filtroTexto = i.text.toLowerCase().includes(termo) || i.category.toLowerCase().includes(termo);
      return filtroTexto
          
        

    })

    const click = ()=>
    {
      Tarefa.pronta = true;
    }


  return(
    <div className="flex flex-col w-full m-2 justify-center items-center border-2 rounded-md bg-white">
        <h1 className="text-3xl font-bold">Hellow, {user.name}!</h1>
        <Search busca={busca} setBusca={setBusca}/>
        
        
          <form className="flex flex-col m-2 gap-6 p-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite sua Tarefa"
            className="border-solid border-2 border-black rounded p-1.5"
            value={tarefa.valor}
            onChange={tarefa.onChange}
            />
            <div className="grid w-full gap-4">
              <button type="submit" className="border-solid border-2 border-none rounded p-1 bg-gray-400">Adicionar</button>
              <select name="Filtros" id="marcadas" value={categoria.valor} onChange={categoria.onChange}
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
                  <Tarefa key={index} text={item.text} category={categoria.valor} onDelete={()=> remove(index)}/>
                ))}
              </ul>
            </div>
          </form>
        

    </div>
  )
}