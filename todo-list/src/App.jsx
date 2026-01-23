import Todo from "./components/Todo"
import { useState } from "react";
import{UseContext} from './Context/UseContext'
import Login from "./components/Login";




export default function App (){

  const[user, setUser] = useState({name: null, isLoggin: false});
  

    return(
      <UseContext.Provider value = {{user, setUser}}>
        <div className="flex self-center">
          {user.isLoggin ? <Todo/> : <Login/>}
        </div>   
    </UseContext.Provider>
    )
}