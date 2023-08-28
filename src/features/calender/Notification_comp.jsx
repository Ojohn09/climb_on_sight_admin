import { IoNotifications } from "react-icons/io5"


function Notification_comp() {

    const notificationArray = [
        { id: 0, notiText: "Ivan Jhay accepted your guide request" },
        { id: 1, notiText: "Ivan Jhay accepted your guide request" },
        { id: 2, notiText: "Ivan Jhay accepted your guide request" },
        { id: 3, notiText: "Ivan Jhay accepted your guide request" },
        { id: 4, notiText: "Ivan Jhay accepted your guide request" },


    ]

    return (
        <div className="bg-white rounded-xl p-3 xl:px-6 h-full overflow-y-auto shadow-sm">
            <div className="xl:my-4 2xl:text-3xl">
                <p>New Notification</p>
            </div>

            <div className="flex flex-col gap-2.5 xl:gap-5 3xl:gap-7 3xl:mt-6 items-center ">
                {notificationArray.map((data) => (
                    <div key={data.id} className="flex gap-2.5 xl:gap-6 2xl:gap-5 3xl:gap-7 4xl:gap-[68px] xs:text-[8px] sm:text-[12px] lg:text-[9px] w-full xl:text-[10px] 2xl:text-[13px] 3xl:text-[20px] 4xl:text-[20px] items-center ">
                        <p className="text-black bg-gray-200 p-1 md:p-2 rounded-full"><IoNotifications /></p>
                        <p className="">{data.notiText}</p>
                        <p className="bg-[#C69776] text-black p-1.5 px-2 4xl:px-4 text-center rounded-2xl cursor-pointer">View</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification_comp