import BodyLogin from "@/components/login/BodyLogin";
import Card from "@/components/login/Card";
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
            <Card>
                <CardHeader>
                    Login Pousada
                </CardHeader>
                <CardBody>
                    <InputText tipo={'email'} label={'Email'} event={handleEmail} name={'email'} id={'email_login'} required />
                    <InputText tipo={'password'} label={'Senha'}  event={handlePassword} name={'password'} id={'password'} required/>
                </CardBody>
            </Card>
        </BodyLogin>
    )
}