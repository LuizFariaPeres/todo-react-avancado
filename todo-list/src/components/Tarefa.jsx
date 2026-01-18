import { useState } from "react"


export default function Tarefa({text, onDelete}){

    const[check, setCheck] = useState(false)

    const Click =()=>{
        setCheck(!check)
    }

    return(
    <div className="flex gap-5 items-center">
        <input type="checkbox" className="w-4 h-4" onClick={Click}/><span className={check ? 'text-3x1 line-through text-gray-500' : 'text-3x1 '}>{text}</span>
        <button className="text-gray-700 hover:text-red-500" onClick={onDelete}>Remover</button>
    </div>
    )
}