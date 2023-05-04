interface ButtonProps {
    tipo?: any,
    title: string

}

export default function Button(props: ButtonProps) {
    return (
        <div className="flex justify-center">
            <button type={props.tipo} className="p-3 px-5 rounded-lg bg-cyan-600 hover:bg-cyan-500">
                {props.title}
            </button>
        </div>
    )
}