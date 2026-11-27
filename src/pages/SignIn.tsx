import type React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";
import { Link } from "react-router";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.SubmitEvent){
    e.preventDefault()
  }

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={onSubmit} className="w-100 border border-gray-500 rounded-[10px] flex flex-col p-7">
        <h1 className="mb-0.5 text-gray-200 text-xl leading-7">Acesse o portal</h1>
        <p className="text-gray-300 text-xs leading-4 mb-10">Entre usando seu e-mail e senha cadastrados</p>

        <Input required legend="E-mail" type="email" placeholder="exemplo@mail.com" onChange={(e) => setEmail(e.target.value)}/>

        <Input required legend="Senha" type="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)}/>

        <Button type="submit" isLoading={isLoading}>Entrar</Button>
      </form>

      <section className="w-100 border border-gray-500 rounded-[10px] p-7 mb-12">
        <h2 className="text-gray-200 text-base mb-0.5">Ainda não tem uma conta?</h2>
        <p className="text-gray-300 text-xs mb-6">Cadastre agora mesmo</p>

        <Link to="/signup" className="w-full flex items-center justify-center bg-gray-500 rounded-md p-2.5 text-gray-200 cursor-pointer hover:bg-gray-400 transition ease-linear">Criar Conta</Link>
      </section>
    </div>


  )
}
