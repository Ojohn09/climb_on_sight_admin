import { ArrowUpRightIcon } from "../../../utils/icons"
// import { generateDate } from "../../../utils/Calendar"


function Cards_components() {

    return (
        <div className="w-full h-auto">
            <div className="flex flex-col md:flex-row gap-6 lg:gap-4 xl:gap-8 items-center w-full ">
                {/* <div className="flex flex-col bg-indigo-100 rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Current Balance</p>
                        <p>Today</p>
                    </div>
                    <div className="">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $34,256
                        </p>
                    </div>
                </div>

                <div className="flex flex-col bg-[#FFEEE2] rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Previous Payout</p>
                        <p>Today</p>
                    </div>
                    <div className=" flex gap-6 items-center">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $23,444
                        </p>
                        <div className="text-green-400 flex items-center text-center text-[8px] p-1 bg-white rounded">
                            <p className="">
                                paid
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-green-50  rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Previous Payout</p>
                        <p>Today</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $23,444
                        </p>
                        <div className="text-red-400 flex items-center text-center text-[6px] p-1 bg-white rounded">
                            <p className="">
                                In balance
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-green-50  rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Earnings summary</p>
                        <p>23 May</p>
                    </div>
                    <div className=" flex gap-4 items-center">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $23,444
                        </p>
                    </div>
                </div> */}



                <div className="flex bg-green-50 rounded-xl p-4 text-center text-[10px] lg:text-[6px] xl:text-[10px] w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center ">
                        <p className="text-lg xl:text-3xl p-1">$324,456</p>
                        <p className="">Guides completed</p>
                        <p className=" text-gray-500">10% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>

                <div className="flex bg-cyan-200 rounded-xl p-3 text-center text-[10px] lg:text-[6px] xl:text-[10px] w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center">
                        <p className="text-lg xl:text-3xl p-1">324</p>
                        <p className="">
                            <span>Total events for july</span>

                        </p>
                        <p className=" text-gray-500">23% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>


                <div className="flex bg-cyan-200 rounded-xl p-3 text-center text-[10px] lg:text-[6px] xl:text-[10px] w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center">
                        <p className="text-lg xl:text-3xl p-1">324</p>
                        <p className="">
                            <span>Total events for july</span>
                            <span></span>
                        </p>
                        <p className=" text-gray-500">23% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>


                <div className="flex bg-rose-100 rounded-xl p-3 text-center text-[10px] lg:text-[6px] xl:text-[10px] w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center">
                        <p className="text-lg xl:text-3xl p-1">4534</p>
                        <p className="">Climbers registered</p>
                        <p className=" text-gray-500">19% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards_components