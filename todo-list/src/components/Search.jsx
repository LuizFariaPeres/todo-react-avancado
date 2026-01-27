import useInput from "../hooks/useInput"

export default function Search ({busca, setBusca}){


    return(
        <div className="flex items-center gap-4 m-2 w-96">
            <input type="text"  value={busca} 
            onChange={(e) =>{setBusca(e.target.value)}}
             placeholder="Pesquisar"
             className="border-2 border-black rounded p-1 w-full"
             />
            <button type="submit" className="border-solid border-2 border-none rounded p-1 bg-gray-300">Buscar</button>

        </div>
    )
}