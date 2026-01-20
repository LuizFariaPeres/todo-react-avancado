import {useState } from "react"
import Tarefa from "./Tarefa"
import useInput from "../hooks/useInput"
import Search from "./Search"

export default function Todo (){


  const[list, setList] = useState([])
  const[busca, setBusca] = useState('');
  const tarefa = useInput();
  const categoria = useInput()

  
  const handleSubmit = (e) =>
    {
      e.preventDefault();
      console.log(tarefa)
      console.log(categoria)

      if(tarefa.valor.trim() === ''){
        alert('Campo obrigatório')
        return
      }

      const novaTarefa = {text: tarefa.valor, category: categoria.valor,concluida: false}

      setList([...list, novaTarefa])
      tarefa.clean();


    }

    const remove = (indexRemove) => {
      setList(prev => prev.filter((_, index) => index !== indexRemove))
    }


  return(
    <div className="flex flex-col w-full h-dvh p-6 content-center justify-center items-center">
        <h1 className="text-3xl font-bold underline">Hellow World</h1>
        <Search busca={busca} setBusca={setBusca}/>
        
          <form className="flex flex-rowl m-2 gap-6 p-5 border-solid border-black border-2 rounded-full" onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite sua Tarefa"
            className="border-solid border-2 border-black rounded p-1.5"
            value={tarefa.valor}
            onChange={tarefa.onChange}
            />
            <select name="Filtros" id="marcadas" value={categoria.valor} onChange={categoria.onChange}>
              <option value="Estudos">Estudos</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
            </select>
            <button type="submit" className="border-solid border-2 border-none rounded p-1 bg-gray-300">Adicionar</button>
          </form>
        

        <div className=" relative flex justify-center p-4 w-96 h-80 border-solid border-2 border-black rounded-b-lg overflow-y-auto">
          <ul className="h-full">
            {list.map((item, index) =>(
              <Tarefa key={index} text={item.text} category={item.category} onDelete={()=> remove(index)}/>
            ))}
          </ul>
        </div>
    </div>
  )
}