export default function CardBody(props: any) {
    return (
        <div className="space-y-4 p-5 md:space-y-6">
            {props.children}
        </div>
    )
}