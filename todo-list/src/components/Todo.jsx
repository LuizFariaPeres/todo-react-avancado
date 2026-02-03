import {useCallback, useContext, useMemo, useState } from "react"
import Tarefa from "./Tarefa"
import useInput from "../hooks/useInput"
import Search from "./Search"
import {Context} from "../Context/UseContext";

export default function Todo (){


  const[list, setList] = useState([]);
  const[busca, setBusca] = useState('');
  const taskInput = useInput();
  const categoryInput = useInput("Estudos");
  const selectInput = useInput('')
  const{user} = useContext(Context)
  const termo = busca.toLowerCase().trim();
  

  
  const handleSubmit = useCallback((e) =>
    {
      e.preventDefault();

      if(taskInput.valor.trim() === '' || categoryInput.valor == ''){
        console.log('Campo obrigatório')
        console.log(categoryInput.valor)
        return
      }

      const newTask = {text: taskInput.valor, category: categoryInput.valor, ready: false}

      setList([...list, newTask])
      taskInput.clean();

      
    }
  ,[taskInput.valor, categoryInput.valor]
)



  const checkReady = (indexReady) =>{
    setList(prev => prev.map((item, index) => index === indexReady? {...item, ready: !item.ready}: item))
  }
  
  const remove = (indexRemove) => {
    setList(prev => prev.filter((_, index) => index !== indexRemove))
  }

  const listFilter = useMemo(()=>{
      return list.filter((i) =>
        {
          const filtroTexto = i.text.toLowerCase().includes(termo) || i.category.toLowerCase().includes(termo);

          if(selectInput.valor === "concluida"){
            return filtroTexto && i.ready
          }
          if(selectInput.valor === "pendentes"){
            return filtroTexto && !i.ready
          }


        return filtroTexto
      },
      [list, termo, selectInput.valor, categoryInput.valor]) 
  })

    

  return(
    <div className="flex flex-col w-full mx-2 justify-center items-center border-2 rounded-md bg-white">
        <h1 className="text-3xl font-bold">Olá, {user.name}!</h1>
        <Search busca={busca} setBusca={setBusca}/>
        <select value={selectInput.valor} onChange={selectInput.onChange}
        className="justify-self-center rounded-md p-1.5 text-center bg-gray-400">
          <option value="todas">Todas</option>
          <option value="concluida">Concluido</option>
          <option value="pendentes">Pendentes</option>
        </select>
        
        
          <form className="w-full flex flex-col m-2  gap-6 p-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite sua Tarefa"
            className="w-full text-center border-2 border-black rounded p-1.5"
            value={taskInput.valor}
            onChange={taskInput.onChange}
            />
            <div className="grid w-full gap-4">
              <button type="submit" className="w-full  rounded p-1 bg-gray-400">Adicionar</button>
              <select value={categoryInput.valor} onChange={categoryInput.onChange}
              className="justify-self-center rounded-md p-1.5 text-center bg-gray-400"
              >
                <option value="Estudos">Estudos</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
              </select>
              
            </div>
            <div className="p-4 w-auto h-80 border-2 border-black rounded-lg overflow-y-auto">
              <ul className="flex flex-col items-center">
                {listFilter.map((item, index) =>(
                  <Tarefa key={index} text={item.text} category={item.category} onDelete={()=> remove(index)} ready={item.ready} onReady={() => checkReady(index)}/>
                ))}
              </ul>
            </div>
          </form>
        

    </div>
  )
}