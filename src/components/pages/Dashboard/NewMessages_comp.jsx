import { Link } from "react-router-dom"
import { PlusIcon } from "../../../utils/icons"


function NewMessages_comp() {
    return (
        <div className="flex gap-4 flex-col mt-2 md:flex-row">
            <div className="md:w-[65%]">
                <div>
                    <p className="text-sm xl:text-base 2xl:text-xl ">New messages</p>
                    <div className="flex flex-col  sm:grid grid-cols-2 bg-white rounded-xl text-[8px] xl:text-xs p-2 xl:p-4 3xl:text-sm">
                        <div className="flex items-center gap-2 px-2 border-r border-b">

                            <img src="https://picsum.photos/200/300" alt="" className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-8 3xl:w-13 2xl:h-8 3xl:h-13 rounded-full" />
                            <div className="w-[70%]">
                                <p>Andray Finn</p>
                                <p className="text-gray-500 text-[7px] xl:text-[10px] 2xl:text-xs 3xl:text-xs 4xl:text-sm">Hello, Good day i would love to make an enquiry .... </p>
                            </div>
                            <p className="p-1 px-2 2xl:px-3 2xl:p-1.5 text-white bg-black rounded-full flex">
                                3
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-2 border-b">

                            <img src="https://picsum.photos/200/300" alt="" className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-8 3xl:w-13 2xl:h-8 3xl:h-13 rounded-full" />
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px] xl:text-[10px] 2xl:text-xs 3xl:text-sm 4xl:text-lg">Hello, Good day i would love to make an enquiry .... </p>
                            </div>
                            <p className="p-1 px-2 2xl:px-3 2xl:p-1.5 text-white bg-black rounded-full flex">
                                3
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-2 border-r">

                            <img src="https://picsum.photos/200/300" alt="" className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-8 3xl:w-13 2xl:h-8 3xl:h-13 rounded-full" />
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px] xl:text-[10px] 2xl:text-xs 3xl:text-sm 4xl:text-lg">Hello, Good day i would love to make an enquiry .... </p>
                            </div>
                            <p className="p-1 px-2 2xl:px-3 2xl:p-1.5 text-white bg-black rounded-full flex">
                                3
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-2">

                            <img src="https://picsum.photos/200/300" alt="" className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-8 3xl:w-13 2xl:h-8 3xl:h-13 rounded-full" />
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px] xl:text-[10px] 2xl:text-xs 3xl:text-sm 4xl:text-lg">Hello, Good day i would love to make an enquiry .... </p>
                            </div>
                            <p className="p-1 px-2 2xl:px-3 2xl:p-1.5 text-white bg-black rounded-full flex">
                                3
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[35%] h-auto">
                <p className="text-sm xl:text-base 2xl:text-xl">
                    Add admin
                </p>
                <div className="flex flex-col bg-white rounded-xl p-4 4xl:p-10 3xl:p-8 text-xs 2xl:text-base 3xl:text-lg 4xl:text-3xl  items-center justify-center">
                    <Link to='/admin' className="w-6 h-6 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 mb-2">
                        <PlusIcon />
                    </Link>

                    <p>Add new admin</p>
                </div>
            </div>

        </div>
    )
}

export default NewMessages_comp