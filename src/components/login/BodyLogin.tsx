export default function BoduLogin(props: any) {
    return (
        <div className="flex flex-col items-center h-screen w-screen justify-center backdrop-blur from-green-600 to-green-950 bg-gradient-to-r">
            {props.children}
        </div>
    )
}