import { FiLock, FiMail } from 'react-icons/fi'
interface InputProps {
    tipo?: String,
    label: String,
    event?: any
}

export default function InputText(props: InputProps) {
    return (
        <>
            <label className="flex items-center text-sm font-medium leading-6 text-gray-950">{props.tipo == 'password' ? <FiLock className='mr-2'/> : <FiMail className='mr-2' /> } {props.label}</label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                        {props.tipo == 'password' ? <FiLock /> : <FiMail /> }
                    </span>
                </div>
                <input type={props.tipo} onChange={(val) => props.event(val)} name="price" id="price" className="block ml-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={props.label} />
            </div>
        </>
    )
}