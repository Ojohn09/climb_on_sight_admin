import React from 'react'
import { BiPlus } from 'react-icons/bi';

function TodayEvent_comp() {
    const today = new Date();
    // Options for formatting the date
    const options = { day: 'numeric', month: 'long', year: 'numeric', };
    const formattedDate = today.toLocaleDateString(undefined, options);

    // const eventData = [
    //     { name: }
    // ]

    return (
        <div className='bg-white h-fit xl:h-full rounded-xl p-4 flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
                <div className='text-xs'>
                    <p className='font-semibold'>Todays</p>
                    <p>{formattedDate}</p>
                </div>

                <div className='text-lg p-1 bg-black text-white rounded-full'>
                    <p><BiPlus /> </p>
                </div>
            </div>

            <div className='w-[60%] xl:w-[50%] lg:text-[13px] xl:text-lg font-bold'>
                <p>
                    Top locations
                </p>
            </div>

            <div className=''>
                <div className='flex items-center justify-between'>
                    <div className="w-28 h-9 sm:h-11 relative mt-1">
                        <img className=" sm:w-8 sm:h-8 w-6 h-6 left-0 sm:left-0 top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className=" sm:w-8 sm:h-8 w-6 h-6 left-[10px] sm:left-[20px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className=" sm:w-8 sm:h-8 w-6 h-6 left-[20px] sm:left-[40px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className=" sm:w-8 sm:h-8 w-6 h-6 left-[30px] sm:left-[60px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className=" sm:w-8 sm:h-8 w-6 h-6 left-[40px] sm:left-[80px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                    </div>

                    <div className='text-[8px] sm:text-[10px] xl:text-xs border-l pl-2'>
                        <p className='font-bold'>View all locations</p>
                        <p className='text-gray-700
                        '>432</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[12px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-12 xl:w-12 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>The wild</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>243 Bookings</p>
                        <p>South park</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[12px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-12 xl:w-12 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>The wild</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>243 Bookings</p>
                        <p>South park</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[12px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-12 xl:w-12 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>The wild</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>243 Bookings</p>
                        <p>South park</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[12px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-12 xl:w-12 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>The wild</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>243 Bookings</p>
                        <p>South park</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[12px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-12 xl:w-12 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>The wild</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>243 Bookings</p>
                        <p>South park</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[12px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-12 xl:w-12 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>The wild</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>243 Bookings</p>
                        <p>South park</p>
                    </div>
                </div>
            </div>

            <div>
                <button className='bg-black w-full text-white p-3 rounded-3xl'>
                    Show all
                </button>
            </div>
        </div>
    )
}

export default TodayEvent_comp