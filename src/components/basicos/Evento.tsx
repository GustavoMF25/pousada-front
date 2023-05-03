import { useState } from "react";

export default function Evento() {
    const [contador, setContador] = useState(0)


    function increment() {
        setContador(contador + 1)
        console.log(contador)
    }
    return (
        <div></div>
    )
}