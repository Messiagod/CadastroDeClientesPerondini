import { Alien, Password } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logotipo.png'


export function Login(){

    const [adm, setAdm] = useState(false)

    return(
        <div className="flex min-h-screen ">
        <main className="h-screeen w-full flex p-10 justify-center">
          <div className="w-2/4 text-white flex flex-col items-center pt-20">
            <div className="h-3/4 w-3/4 flex flex-col items-center gap-2">
              <div className="w-96 h-40 flex items-center justify-center">
                <div>
                  <img src={Logo} className="w-72" />
                </div>
              </div>
              <div className="w-96 h-60 flex flex-col gap-4">
                <div className="inputStyle">
                  <div className='h-full w-[15%] flex justify-center items-center'>
                    <Alien size={28} color="#52658C" />
                  </div>
                  <div className='w-full h-full flex'>
                    <input type="text" className='bg-transparent w-full p-2 focus:outline-none font-bold' placeholder='Usuário' />
                  </div>
                </div>
                <div className="inputStyle">
                  <div className='h-full w-[15%] flex justify-center items-center'>
                    <Password size={28} color="#52658C" />
                  </div>
                  <div className='w-full h-full flex'>
                    <input type="text" className='bg-transparent w-full p-2 focus:outline-none font-bold' placeholder='Senha' />
                  </div>
                </div>
                <div className='h-[25%] flex items-center justify-center text-white font-bold text-xl cursor-pointer'>
                  <Link to={"/Home"} className='bg-[#52658C] w-[40%] h-[90%] rounded-xl flex items-center justify-center hover:bg-gray-500'>                                        
                    <span>
                      Acessar
                    </span> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}