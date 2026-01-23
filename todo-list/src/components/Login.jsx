import { useContext } from "react";
import useInput from "../hooks/useInput";
import { UseContext } from "../Context/UseContext";



function Login(){
    const userName = useInput();
    const {setUser} = useContext(UseContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        //validar

        //gravar
        //quando for feito a tentativa de gravação, username.valor refere-se a variavel valor do hook useInput,
        //sempre que for usado esse hooks, deve ser passado suas funções
        setUser({name: userName.valor, isLoggin: true})
    }

    
    return(
        <div>
            <h1>To-do List</h1>
            <form onSubmit={handleSubmit} className="flex items-stretch border-2 border-black p-3 rounded-md">
                <input type="text"
                placeholder="Digite seu nome"
                value={userName.valor} 
                onChange={userName.onChange}/>

                <button type="submit" className="self-end">Entrar</button>
            </form>
        </div>
    )
}

export default Login;