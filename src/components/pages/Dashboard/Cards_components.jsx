import { ArrowUpRightIcon } from "../../../utils/icons"
// import { generateDate } from "../../../utils/Calendar"


function Cards_components() {

    return (
        <div className="w-full h-auto">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-4 2xl:gap-8 items-center w-full ">

                <div className="flex bg-green-50 rounded-xl p-4 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:p-6 w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col w-full text-center ">
                        <p className="text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl p-1">$324,456</p>
                        <p className=" xl:my-2">Guides completed</p>
                        <p className=" text-gray-500">10% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>

                <div className="flex bg-cyan-200 rounded-xl p-3 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:p-6 w-full md:w-[25%] shadow-sm">
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


                <div className="flex bg-cyan-200 rounded-xl p-3 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:p-6 w-full md:w-[25%] shadow-sm">
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


                <div className="flex bg-rose-100 rounded-xl p-3 text-center text-[10px] lg:text-[6px] xl:text-[10px] 3xl:text-xs 4xl:text-sm 3xl:p-6 w-full md:w-[25%] shadow-sm">
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
    )
}

export default Cards_components