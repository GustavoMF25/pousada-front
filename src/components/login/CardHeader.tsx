export default function CardHeader(props: any) {
    return (
        <div className="text-2xl flex justify-center font-bold text-gray-950 border-b-2 p-3">
            {props.children}
        </div>
    )
}