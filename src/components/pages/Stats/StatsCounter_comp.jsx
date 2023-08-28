import { ArrowUpRightIcon } from "../../../utils/icons"


function StatsCounter_comp() {
    return (
        <div>
            <div className="w-full h-auto">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-4 2xl:gap-8 items-center w-full ">

                    <div className="flex justify-center bg-green-50 rounded-xl p-3 2xl:p-5 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:py-8 4xl:py-12 w-full md:w-[25%] shadow-sm">
                        <div className=" flex flex-col w-full text-center ">
                            <p className="text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl p-1">$324,456</p>
                            <p className=" xl:my-2">Guides completed</p>
                            <p className=" text-gray-500">10% increase from last week</p>
                        </div>
                        <div className="">
                            <ArrowUpRightIcon />
                        </div>
                    </div>

                    <div className="flex justify-center bg-cyan-200 rounded-xl p-3 2xl:p-5 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:py-8 4xl:py-12 w-full md:w-[25%] shadow-sm">
                        <div className=" flex flex-col w-full text-center">
                            <p className="text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl p-1">324</p>
                            <p className=" xl:my-2">
                                <span>Total events for july</span>

                            </p>
                            <p className=" text-gray-500">23% increase from last week</p>
                        </div>
                        <div className="">
                            <ArrowUpRightIcon />
                        </div>
                    </div>


                    <div className="flex justify-center bg-cyan-200 rounded-xl p-3 2xl:p-5 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:py-8 4xl:py-12 w-full md:w-[25%] shadow-sm">
                        <div className=" flex flex-col w-full text-center">
                            <p className="text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl p-1">324</p>
                            <p className=" xl:my-2">
                                <span>Total events for july</span>
                                <span></span>
                            </p>
                            <p className=" text-gray-500">23% increase from last week</p>
                        </div>
                        <div className="">
                            <ArrowUpRightIcon />
                        </div>
                    </div>


                    <div className="flex justify-center bg-rose-100 rounded-xl p-3 2xl:p-5 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:py-8 4xl:py-12 w-full md:w-[25%] shadow-sm">
                        <div className=" flex flex-col w-full text-center">
                            <p className="text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl p-1">4534</p>
                            <p className=" xl:my-2">Climbers registered</p>
                            <p className=" text-gray-500">19% increase from last week</p>
                        </div>
                        <div className="">
                            <ArrowUpRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCounter_comp