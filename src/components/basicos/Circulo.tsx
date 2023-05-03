interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    console.log(props)
    return (
        <div className={`
                flex justify-center items-center
                h-64 w-64 bg-cyan-500 rounded-full
                text-black text-3xl font-black

                ${props.quasePerfeito ? 'rounded-2xlle' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}