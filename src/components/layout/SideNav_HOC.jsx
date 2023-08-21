import { Link } from "react-router-dom"
import { CalendarDaysIcon, ChatBubbleLeftIcon, HomeIcon, MegaphoneIcon, WalletIcon } from "../../utils/icons"
import { BiSolidDoorOpen } from "react-icons/bi"
import groupUser from '../../assets/icons/GroupUser.svg'


function SideNav_HOC() {
    return (
        <div className="">
            <div className="bg-[#F4E8DF] fixed border border-r lg:min-h-[80%] xl:min-h-[90%] menu flex flex-col justify-between gap-[150px] z-50 p-3 w-[50px]">
                <div>
                    <Link to="/dashboard" className="text-[10px] font-face-mr ">CBO</Link>
                </div>


                <div className="flex flex-col gap-10 text-gray-400">
                    <Link to='/dashboard'>
                        <div className="menu-icon flex items-center gap-2">
                            <HomeIcon />
                            <p className="menu-text text-black font-semibold">Home</p>
                        </div>
                    </Link>

                    <Link to='/all-guides'>
                        <div className="menu-icon flex items-center gap-2 text-gray-400">
                            <img src={groupUser} alt="" className="w-5 h-5 text-gray-400" />
                            <p className="menu-text text-black font-semibold">Guides</p>
                        </div>
                    </Link>

                    <Link to='/events'>
                        <div className="menu-icon flex items-center gap-2">
                            <MegaphoneIcon />
                            <p className="menu-text flex justify-between gap-1">
                                <span className="text-black font-semibold">Upcoming</span>
                                <span className="text-black font-semibold">Events</span>
                            </p>
                        </div>
                    </Link>
                    <Link to='/calendar'>
                        <div className=" menu-icon flex items-center gap-2">
                            <CalendarDaysIcon />
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