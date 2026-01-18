import { useState } from "react"

export default function useInput(init = ''){
    const[valor, setValor] = useState(init);

    const onChange = (e)=>{
        setValor(e.target.value);
    }

    const clean = () => setValor('');



    return({valor, onChange, clean})
}