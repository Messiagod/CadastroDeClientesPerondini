import { ArrowElbowDownRight, MagnifyingGlass, Trash, UserPlus } from "phosphor-react"
import { useState } from "react"
import Logo from "../assets/logotipo.png"

export function Home() {

    // Header da tabela , utilizo um map pra não ter que ficar escrevendo div
    const headerTable = ['Nome', 'CPF', 'Endereço', 'RG', 'CELULAR']

    // DADOS FICTÍCIOS DA TABELA
    const data = [
        {
            "Nome": "TICO MESSI",
            "CPF": 696969,
            "Endereço": "inferno.com",
            "RG": 707070,
            "CELULAR": 69696969
        },
        {
            "Nome": "PEDRO PERONDINI",
            "CPF": 3242352,
            "Endereço": "inferno.com",
            "RG": 235235,
            "CELULAR": 235235
        },
        {
            "Nome": "LUCA SEM SALMAO",
            "CPF": 235523,
            "Endereço": "inferno.com",
            "RG": 253235,
            "CELULAR": 235235
        },
        {
            "Nome": "bobo",
            "CPF": 758956,
            "Endereço": "inferno.com",
            "RG": 67967,
            "CELULAR": 54645
        },
        {
            "Nome": "lula",
            "CPF": 806786,
            "Endereço": "inferno.com",
            "RG": 607807,
            "CELULAR": 789078
        },
        {
            "Nome": "ulala",
            "CPF": 636435,
            "Endereço": "inferno.com",
            "RG": 586585,
            "CELULAR": 6967
        },
        {
            "Nome": "ancara",
            "CPF": 967679,
            "Endereço": "inferno.com",
            "RG": 6796796,
            "CELULAR": 67967960
        },
    ]

    // Adicionei um estado para armazenar oq foi digitado pelo usuário
    const [searchItem, setSearchItem] = useState('');

    // Usei o método filter para filtrar os dados com base noq o usuário digitou
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchItem.toLowerCase())
        )
    );

    // Lógica para excluir o item
    const handleDelete = (item) => {
        alert(`Confirmação de exlusão: ${item.Nome}`)
        console.log(`Excluir: ${item.Nome}`);
    };


    return (
        <div className="bg-gray-100 h-screen flex flex-col gap-6">
            <div className="bg-white h-20 flex justify-center items-center shadow-lg rounded-xl  mx-5">
                <div className="w-[20%] h-20 flex items-center">
                    <img src={Logo} />
                </div>
            </div>
            <div className="bg-white h-full rounded-t-xl shadow-lg mx-5 p-5">
                <div className=" w-full h-full flex flex-col">
                    <div className="h-[12%] flex justify-between items-center p-2">
                        <span className="font-bold text-3xl text-gray-600">
                            Lista de Clientes
                        </span>
                        <div className="bg-[#52658C] hover:bg-blue-700 cursor-pointer w-52 h-14 rounded-xl text-white gap-2 flex items-center justify-center">
                            <span className="font-bold  text-xl">
                                Novo Cliente
                            </span>
                            <UserPlus size={32} />
                        </div>
                    </div>
                    <div className="h-[14%] flex justify-between items-center">
                        <div className="flex items-center border w-1/4 rounded-xl">
                            <div className='h-full w-[15%] flex justify-center items-center'>
                                <MagnifyingGlass size={28} />
                            </div>
                            <div className='w-full h-full flex'>
                                <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className='bg-transparent w-full p-2 focus:outline-none font-semibold' placeholder='Procurar Usuário' />
                            </div>
                        </div>
                        <div className="flex gap-2 h-[65%] w-60">
                            <div className="bg-gray-200 w-1/2 flex items-center justify-center rounded-lg">Filter</div>
                            <div className="bg-gray-200 w-1/2 flex items-center justify-center rounded-lg">Filter</div>
                        </div>
                    </div>
                    <div className="h-[84%]">
                        <div class="overflow-x-auto relative border rounded h-full">
                            <table class="w-full  border-gray-600 border-b text-sm text-left text-gray-200">
                                <thead class="text-x shadow-lg uppercasebg-gray-700 text-blue-500 ">
                                    <tr>
                                        {headerTable.map((data) => (
                                            <th
                                                key={data}
                                                scope="col"
                                                className="py-3  px-6 text-left font-bold text-gray-500 uppercase tracking-wider"
                                            >
                                                {data}
                                            </th>
                                        ))}
                                        <th>
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 font-semibold">
                                    {filteredData.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-100 hover:bg-opacity-50 cursor-pointer"  onClick={() => handleDelete(item)}>
                                            {headerTable.map((header) => (
                                                <td key={header} className="py-4 px-6">
                                                    {item[header]}
                                                </td>
                                            ))}
                                            <td className="flex items-center p-3 bg-red-400 hover:bg-red-600 rounded w-10 justify-center mt-1">
                                                <Trash size={20}
                                                    className="text-white cursor-pointer"                                                   
                                                />
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}