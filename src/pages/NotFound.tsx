import loginBg from "../assets/login_bg.png";

export function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
    style={{backgroundImage: `url(${loginBg})`}}>
      <div className="flex flex-col gap-5 rounded-2xl items-center justify-center text-gray-600 w-full">
        <h1 className="font-semibold text-3xl">Ops! Essa página não existe! 🥲</h1>
        <a href="/" className="text-center hover:text-blue-base font-semibold text-lg">Voltar ao início</a>
      </div>
    </div>
  )
}
