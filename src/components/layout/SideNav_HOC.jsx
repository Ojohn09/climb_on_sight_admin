import { Link } from "react-router-dom"
import { ChatBubbleLeftIcon, HomeIcon, WalletIcon } from "../../utils/icons"
import { BiSolidDoorOpen } from "react-icons/bi"
import { IoCalendar } from 'react-icons/io5'
import { BiSolidGroup, BiSolidUser } from 'react-icons/bi'
import { BsFillPlusCircleFill } from 'react-icons/bs'


function SideNav_HOC() {
    return (
        <div className="xl:mt-4">
            <div className="bg-[#F4E8DF] fixed border border-r lg:min-h-[80%] xl:max-h-screen menu flex flex-col justify-between gap-[150px] z-50 p-3 w-[50px]">
                <div>
                    <Link to="/dashboard" className="text-[8px] font-face-mr ">CBO</Link>
                </div>


                <div className="flex flex-col gap-6 text-gray-400">
                    <Link to='/dashboard'>
                        <div className="menu-icon flex items-center gap-2">
                            <HomeIcon />
                            <p className="menu-text text-black font-semibold">Home</p>
                        </div>
                    </Link>

                    <Link to='/guides'>
                        <div className="menu-icon flex items-center gap-2 text-gray-400">
                            <BiSolidGroup />
                            <p className="menu-text flex justify-between gap-1">
                                <span className="text-black font-semibold">All</span>
                                <span className="text-black font-semibold">Guides</span>
                            </p>
                        </div>
                    </Link>

                    <Link to='/climbers'>
                        <div className="menu-icon flex items-center gap-2 text-gray-400">
                            <BiSolidUser />
                            <p className="menu-text flex justify-between gap-1">
                                <span className="text-black font-semibold">All</span>
                                <span className="text-black font-semibold">Climbers</span>
                            </p>
                        </div>
                    </Link>

                    <Link to='/events'>
                        <div className="menu-icon flex items-center gap-2">
                            <IoCalendar />
                            <p className="menu-text text-black font-semibold">Events</p>
                        </div>
                    </Link>
                    <Link to='/calendar'>
                        <div className=" menu-icon flex items-center gap-2">
                            <BsFillPlusCircleFill />
                            <p className="menu-text text-black font-semibold">Calender</p>
                        </div>
                    </Link>
                    <Link to='/payout'>
                        <div className="menu-icon flex items-center gap-2">
                            <WalletIcon />
                            <p className="menu-text text-black font-semibold">Payout</p> </div>
                    </Link>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2">
                            <ChatBubbleLeftIcon />
                            <p className="menu-text text-black font-semibold">Chat</p> </div>
                    </Link>
                </div>

                <div>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2 text-base ">
                            <p className="p-1 bg-black text-white rounded-full text-[10px]"><BiSolidDoorOpen /></p>
                            <p className="menu-text font-semibold">Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav_HOC