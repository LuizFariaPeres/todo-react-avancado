import { useContext } from "react";
import useInput from "../hooks/useInput";
import { UseContext } from "../Context/UseContext";



function Login(){
    const userName = useInput();
    const {setUser} = useContext(UseContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        //validar
        if(userName.valor.trim() === ''){
            alert("Digita seu nome, Tchongo")
            return
        }

        //gravar
        //quando for feito a tentativa de gravação, username.valor refere-se a variavel valor do hook useInput,
        //sempre que for usado esse hooks, deve ser passado suas funções
        setUser({name: userName.valor, isLoggin: true})
    }

    
    return(
        <div className="flex w-80 h-96 flex-col border-2 bg-white rounded-lg p-2">
            <form onSubmit={handleSubmit} 
                className="flex justify-center flex-col p-3 gap-2 rounded-md bg-gray-300 mt-10">
                <h1 className="text-center font-serif">TO-DO LIST</h1>
                <input type="text"
                placeholder="Digite seu nome"
                value={userName.valor} 
                onChange={userName.onChange}
                className="rounded-md p-2 focus:outline focus:outline-sky-500 focus:outline-offset-3"/>
                <button type="submit" className="bg-white rounded-md p-2 text-gray-500 hover:bg-gray-400 hover:text-white">Entrar</button>
            </form>
        </div>
    )
}

export default Login;