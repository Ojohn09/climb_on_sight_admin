import { PlusIcon } from "../../../utils/icons"


function NewMessages_comp() {
    return (
        <div className="flex gap-4 flex-col mt-2 md:flex-row h-auto">
            <div className="md:w-[65%] h-auto">
                <div>
                    <p className="">New messages</p>
                    <div className="flex flex-col  sm:grid grid-cols-2 bg-white rounded-xl text-[8px] p-2 gap-2">
                        <div className="flex items-center gap-2">

                            <p className="w-5 h-5 bg-gray-600 rounded-full"></p>
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px]">Hello, Good day i would love to make an enquiry as regards your timing... </p>
                            </div>
                            <p className="w-4 h-4 text-white text-center bg-black rounded-full">
                                3
                            </p>
                        </div>
                        <div className="flex items-center gap-2">

                            <p className="w-5 h-5 bg-gray-600 rounded-full"></p>
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px]">Hello, Good day i would love to make an enquiry as regards your timing... </p>
                            </div>
                            <p className="w-4 h-4 text-white text-center bg-black rounded-full">
                                3
                            </p>
                        </div>
                        <div className="flex items-center gap-2">

                            <p className="w-5 h-5 bg-gray-600 rounded-full"></p>
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px]">Hello, Good day i would love to make an enquiry as regards your timing... </p>
                            </div>
                            <p className="w-4 h-4 text-white text-center bg-black rounded-full">
                                3
                            </p>
                        </div>
                        <div className="flex items-center gap-2">

                            <p className="w-5 h-5 bg-gray-600 rounded-full"></p>
                            <div className="w-[70%]">
                                <p>Andrey Finn</p>
                                <p className="text-gray-500 text-[7px]">Hello, Good day i would love to make an enquiry as regards your timing... </p>
                            </div>
                            <p className="w-4 h-4 text-white text-center bg-black rounded-full">
                                3
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[35%] h-auto">
                <p className="">
                    Add admin
                </p>
                <div className="flex flex-col bg-white rounded-xl p-4 text-xs items-center justify-center">
                    <p className="w-8 h-8 mb-2">
                        <PlusIcon />
                    </p>
                    <p>Add new admin</p>
                </div>
            </div>

        </div>
    )
}

export default NewMessages_comp