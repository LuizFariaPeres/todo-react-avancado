

export default function TodoSearch ({busca, setBusca}){


    return(
        <div className="flex items-center gap-3 m-2 w-96">
            <input type="text"  value={busca} 
            onChange={(e) =>{setBusca(e.target.value)}}
             placeholder="Pesquisar"
             className="border-2 border-black rounded p-1 w-full"
             />
            <button type="submit" className="border-2 border-none rounded p-1.5 bg-gray-300">Buscar</button>

        </div>
    )
}