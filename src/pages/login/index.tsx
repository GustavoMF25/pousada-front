import BodyLogin from "@/components/login/BodyLogin";
import CardLogin from "@/components/login/CardLogin";
import InputText from "@/components/login/Inputs/InputText";
import CardHeader from "@/components/login/CardHeader";
import CardBody from "@/components/login/CardBody";
import { useState } from "react";


export default function App() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleEmail = (params: string) => {
        setEmail(params);
    }
    const handlePassword = (params: string) => {
        setSenha(params)
    }


    return (
        <BodyLogin>
            <CardLogin>
                <CardHeader>
                    Login Pousada
                </CardHeader>
                <CardBody>
                    <InputText tipo={'email'} label={'Email'} event={handleEmail} />
                    <InputText tipo={'password'} label={'Senha'}  event={handlePassword}/>
                </CardBody>
            </CardLogin>
        </BodyLogin>
    )
}