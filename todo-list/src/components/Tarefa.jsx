import { memo, useState } from "react"


function Tarefa({text, category, onDelete, ready, onReady}){
   



    return(
    <div className="flex flex-col m-4 bg-white p-3 rounded-md">
        <div className="flex items-center  gap-7">
            <button className="bg-green-600 text-white p-1 rounded-md text-gray-700" onClick={onReady}>Completar</button>
            <p className={`cursor-pointer p-2 w-full ${ready? 'text-3x1 text-gray-500 text-green-400': "text-black"}`}>{text}</p>
            <button className="bg-gray-400 text-white p-1 rounded-md text-gray-700 hover:text-red-500" onClick={onDelete}>Remover</button>
        </div>
        <p className={`text-black text-center mt-2 ${ready? 'text-3x1 text-gray-500 text-green-400': "text-black"}`}>{`(${category})`}</p>
    </div>
    )
}

export default memo(Tarefa)