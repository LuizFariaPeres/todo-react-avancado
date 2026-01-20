import useInput from "../hooks/useInput"

export default function Search ({busca, setBusca}){
    const input = useInput()

    return(
        <div>
            <h2>Pesquisar</h2>
            <input type="text"  value={input.valor} onChange={input.onChange} placeholder="Pesquisar"/>

        </div>
    )
}