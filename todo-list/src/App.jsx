import { useState } from "react"
import Todo from "./components/Todo"
import { UseContext } from "./Context/UseContext";


export default function App (){

  const[busca, setBusca] = useState('');


    return(
      <UseContext.Provider value={{busca, setBusca}}>
        <Todo/>
      </UseContext.Provider>

    )
}