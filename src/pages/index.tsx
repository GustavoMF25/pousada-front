import Card from "@/components/login/Card";
import CardBody from "@/components/login/CardBody";
import CardHeader from "@/components/login/CardHeader";
import Button from "@/components/login/Inputs/Button";
import InputText from "@/components/login/Inputs/InputText"
import { useState } from "react";



export default function Home() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleEmail = (params: string) => {
    setEmail(params);
  }
  const handlePassword = (params: any) => {
    setSenha(params)
  }




  const submitFormLogin = (e: any) => {
    console.log(e)
    console.log(senha + ' - ' + email)
    e.preventDefault()
  }



  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="w-full h-full bg-[url('/images/pousada-background.jpg')] bg-no-repeat bg-center bg-cover">
        <div className=" w-full h-full flex flex-col items-center justify-center px-6 backdrop-blur-md py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-red">
            <img src='/images/pousada.png' className="w-10" />
            Paranóica
          </a>
          <Card>
            <CardHeader>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Entre com sua conta
              </h1>
            </CardHeader>

            <CardBody>
              <form onSubmit={submitFormLogin} action="#" >
                <div>
                  <InputText label="E-mail" event={handleEmail} autoComplete="off" id="email" name="email" required tipo="email" />
                </div>
                <div>
                  <InputText label="Senha" event={handlePassword} autoComplete="off" id="email" name="password" required tipo="password" />
                </div>

                <Button tipo={'submit'} title="Entrar" />

              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}