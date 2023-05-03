import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculo() {
    return (
        <div className="flex  bg-red-500 justify-around h-screen">
            <Circulo  texto="Circulo #1" />
            <Circulo  texto="Circulo #2"/>
            <Circulo  texto="Circulo #4" quasePerfeito />
        </div>
    )
}