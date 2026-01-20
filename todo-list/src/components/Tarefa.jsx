import { memo, useState } from "react"


function Tarefa({text, category, onDelete}){

    const[check, setCheck] = useState(false)

    const Click =()=>{
        setCheck(!check)
    }

    return(
    <div className="flex flex-col m-4">
        <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" onClick={Click}/><p className={check ? 'text-3x1 line-through text-gray-500' : 'text-3x1 '}>{text}</p>
            <button className="text-gray-700 hover:text-red-500" onClick={onDelete}>Remover</button>

        </div>
        <p className="text-black">{`(${category})`}</p>
    </div>
    )
}

export default memo(Tarefa)