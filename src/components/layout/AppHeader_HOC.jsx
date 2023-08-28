import { IoSettings } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'
import ModalModal from '../modal/ModalModal'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '../../redux/slices/features/modal/modalSlice'
import { openModal2, closeModal2 } from '../../redux/slices/features/modal/modalSlice2'
import { openModal3, closeModal3 } from '../../redux/slices/features/modal/modalSlice3'
import { UserIcon } from '../../utils/icons'
import Lock from '../../assets/icons/Lock.svg'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'


function AppHeader_HOC() {

    const dispatch = useDispatch()
    const modalOpen = useSelector((state) => state.modal.isOpen)
    const modalOpen2 = useSelector((state) => state.modal2.isOpen);
    const modalOpen3 = useSelector((state) => state.modal3.isOpen);

    const [isNotification, setIsNofification] = useState(false)
    const [isSettings, setIsSettings] = useState(false)
    const [isProfile, setIsProfile] = useState(false)

    if (isNotification) {
        return openModal2
    }

    return (
        <div className=''>
            <div className="py-3 flex flex-col gap-4 md:flex-row justify-between items-center bg-[#FBF7F4]">
                <div className=" md:w-[50%]">
                    <div className='w-full'>
                        <div className="relative flex items-center w-full h-8 rounded-2xl shadow-sm bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 22 21" fill="none">
                                    <circle cx="9" cy="9" r="8.5" stroke="black" />
                                    <circle cx="19.5" cy="18.5" r="2" stroke="black" />
                                </svg>
                            </div>

                            <input
                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search something.." />
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-end'>
                    <div className="flex items-center justify-end w-full gap-4">
                        <div className='relative'>
                            <div
                                onClick={() => dispatch(openModal())}
                                className={`p-2 bg-white rounded-full text-gray-700 cursor-pointer`}>
                                <IoSettings />
                            </div>
                            <ModalModal modalOpen={modalOpen}>
                                <div className='p-5 bg-white absolute top-16 right-[150px] rounded-xl'>
                                    <div className='flex justify-between py-1 items-center'>
                                        <p className='mb-2'>Settings</p>
                                        <p
                                            onClick={() => dispatch(closeModal())}
                                            className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='w-[200px] border rounded-lg p-2 flex items-center cursor-pointer justify-between text-xs bg-gray-100'>
                                            <p>Edit profile</p>
                                            <p><UserIcon /></p>
                                        </div>

                                        <div className='w-[200px] border rounded-lg p-2 flex items-center cursor-pointer justify-between text-xs bg-gray-100'>
                                            <p>Password reset</p>
                                            <img src={Lock} alt="" className='w-4 h-4' />
                                        </div>
                                    </div>
                                </div>
                            </ModalModal>

                        </div>
                        <div className='relative'>
                            <div
                                onClick={() => dispatch(openModal2())}
                                className='p-2 bg-white rounded-full text- text-gray-700'>
                                <BsBellFill />
                            </div>
                            <ModalModal modalOpen={modalOpen2}>
                                <div className='p-5 bg-white absolute top-16 right-[150px] rounded-xl'>
                                    <div className='flex justify-between py-1 items-center'>
                                        <p className='mb-2'>Settings</p>
                                        <p
                                            onClick={() => dispatch(closeModal2())}
                                            className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                                    </div>
                                </div>

                            </ModalModal>
                        </div>
                        <div className=''>
                            <img
                                onClick={() => dispatch(openModal3())}
                                src="https://picsum.photos/200/300" alt="" className='w-10 h-10 rounded-full' />
                            <ModalModal modalOpen={modalOpen3}>
                                <div className='p-5 bg-white absolute top-16 right-[150px] rounded-xl'>
                                    <div className='flex justify-between py-1 items-center'>
                                        <p className='mb-2'>Profile</p>
                                        <p
                                            onClick={() => dispatch(closeModal3())}
                                            className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                                    </div>
                                </div>
                            </ModalModal>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader_HOC