export default function CardLogin(props: any){
    return (
        <div className=" md:w-[500px] lg:w=[500px] sm:w[300px] h-90 bg-slate-100  shadow border-t-4 border-green-500 bg-slate-200 rounded">
            {props.children}
        </div>
    )
}