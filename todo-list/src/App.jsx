import TodoForm from "./components/TodoForm"
import { useState } from "react";
import{Context} from './Context/UseContext'
import TodoLogin from "./components/TodoLogin";




export default function App (){

  const[user, setUser] = useState({name: null, isLoggin: false});
  

    return(
      <Context.Provider value = {{user, setUser}}>
        <div className="flex self-center">
          {user.isLoggin ? <TodoForm/> : <TodoLogin/>}
        </div>   
    </Context.Provider>
    )
}