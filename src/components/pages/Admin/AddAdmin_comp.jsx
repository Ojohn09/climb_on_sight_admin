import { AiOutlinePlus } from 'react-icons/ai'

function AddAdmin_comp() {
    return (
        <div className="w-full h-full">
            <p className="font-semibold text-lg 3xl:text-2xl">Add Admin</p>

            <div className="flex flex-col items-center place-content-center text-sm 3xl:xl h-[80vh] justify-center">
                <div className="bg-white rounded-3xl w-[30%] p-10">
                    <p className="w-[80%] mx-auto text-center">
                        You currently have no admins
                        they will appear here when you do
                        click on the plus icon to add an admin
                    </p>
                </div>
                <div>
                    <button className='bg-black text-white flex items-center p-2 text-xs rounded-2xl mt-4'>
                        <span><AiOutlinePlus /> </span>
                        <span>Add admin</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin_comp