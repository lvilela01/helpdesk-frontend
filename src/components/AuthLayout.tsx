import { Outlet } from "react-router";

import logoSvg from "../assets/Logo_IconLight.svg";
import loginBg from "../assets/login_bg.png";

export function AuthLayout() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center pt-3"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <main className="ml-auto w-full lg:w-1/2 lg:rounded-tl-2xl flex flex-1 flex-col items-center bg-gray-600">
        <div className="flex items-center mt-12 mb-8 gap-2">
          <img src={logoSvg} alt="Logo" className="w-10 h-10"/>
          <h1 className="text-blue-dark text-2xl font-bold leading-[1.4]">HelpDesk</h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
