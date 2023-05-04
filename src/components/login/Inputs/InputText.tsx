import { FiLock, FiMail } from 'react-icons/fi'
interface InputProps {
    tipo?: string,
    label: string,
    event?: any,
    id: string,
    name: string,
    required: boolean,
    autoComplete?: string
}

export default function InputText(props: InputProps) {
    return (
        <div className='mb-5'>

            <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center">
                <div className='mr-2'>
                    {props.tipo == 'password' ? <FiLock /> : <FiMail />}
                </div>
                {props.label}
            </label>
            <input
                autoComplete={props.autoComplete}
                type={props.tipo}
                onChange={(val) => props.event(val)}
                name={props.name}
                id={props.id}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                required
            />
        </div>
    )
}