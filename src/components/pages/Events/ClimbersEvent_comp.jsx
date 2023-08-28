import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../../../redux/slices/features/eventSlice";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";


function ClimbersEvent_comp() {
    const eventData = [
        { id: 0, image: 'https://source.unsplash.com/random/300x200?sig=1', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 1, image: 'https://source.unsplash.com/random/300x200?sig=2', name: 'hike', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 2, image: 'https://source.unsplash.com/random/300x200?sig=3', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 3, image: 'https://source.unsplash.com/random/300x200?sig=4', name: 'hike', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 4, image: 'https://source.unsplash.com/random/300x200?sig=5', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 5, image: 'https://source.unsplash.com/random/300x200?sig=6', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 6, image: 'https://source.unsplash.com/random/300x200?sig=7', name: 'hike', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 7, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 8, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 9, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 10, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 11, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 12, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 13, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 14, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Climb off', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },

    ]

    const climbers = [
        { id: 0, image: 'https://source.unsplash.com/random/300x200?sig=1', name: 'Alexander Petrov' },
        { id: 1, image: 'https://source.unsplash.com/random/300x200?sig=2', name: 'Detroov Amir' },
        { id: 2, image: 'https://source.unsplash.com/random/300x200?sig=3', name: 'Felix Navidad' },
        { id: 3, image: 'https://source.unsplash.com/random/300x200?sig=4', name: 'Peter Jessy' },
        { id: 4, image: 'https://source.unsplash.com/random/300x200?sig=5', name: 'Oslov Remmy' },
        { id: 5, image: 'https://source.unsplash.com/random/300x200?sig=6', name: 'Dennis Adam' },
        { id: 6, image: 'https://source.unsplash.com/random/300x200?sig=7', name: 'Lucy Chandlar' },
        { id: 7, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Alex Demir' },
        { id: 8, image: 'https://source.unsplash.com/random/300x200?sig=9', name: 'Antetokumpo Giannis' },
        { id: 9, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Lebron James' },
    ]

    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) => state.event.selectedEvent);

    const [slideAnimation, setSlideAnimation] = useState("slide-in");


    const handleEventClick = (event) => {
        dispatch(selectEvent(event));

        setSlideAnimation("slide-out");

        // Delay to allow the slide-out animation to complete
        setTimeout(() => {
            dispatch(selectEvent(event));
            setSlideAnimation("slide-in"); // Slide in animation for new event
        }, 700); // Adjust timing as needed

    };


    return (



        <div>
            <div className='w-full flex  overflow-y-hidden'>
                <div className='lg:w-[60%] xl:w-[70%] h-[86vh] scrollbar-hide overflow-y-auto'>
                    <div className='h-[50px] p-2 fixed flex items-center justify-between lg:w-[53%] xl:w-[64%] z-10 bg-[#FBF7F4] border-b border-r'>
                        <p className='font-semibold'>Climber Event</p>
                        <div className="relative flex items-center px-1 w-[30%] h-8 rounded-2xl shadow-sm bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-8 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 22 21" fill="none">
                                    <circle cx="9" cy="9" r="8.5" stroke="black" />
                                    <circle cx="19.5" cy="18.5" r="2" stroke="black" />
                                </svg>
                            </div>

                            <input
                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search events" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-3'>
                        {
                            eventData.map((data) => (
                                <div
                                    key={data.id}
                                    onClick={() => handleEventClick(data)}
                                    className={`bg-white rounded-xl shadow-xl p-2 w-fit cursor-pointer`}>
                                    <div>
                                        <img src={data.image} alt="" className='w-full rounded-xl' />

                                    </div>
                                    <div className="flex lg:text-[12px] justify-between w-auto mt-2 font-semibold">
                                        <p>{data.name}</p>
                                        <p>{data.amount}</p>
                                    </div>
                                    <div className='flex text-[8px] lg:text-[7px] xl:text-[8px] gap-3 mt-2'>
                                        <div>
                                            <p className='text-gray-400'>Date</p>
                                            <p>{data.date}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400'>Time</p>
                                            <p>{data.time}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400'>Location</p>
                                            <p>{data.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='lg:w-[40%] xl:w-[30%] lg:block hidden relative border-l'>
                    <div className='fixed p-2 border-b h-[50px] w-[40%] z-10 bg-[#FBF7F4]'>
                        <p>Selected events</p>
                    </div>

                    <div className="mt-12 overflow-hidden">
                        <div
                            className={` p-2 ${slideAnimation} transition-all duration-700`}
                        >
                            {selectedEvent && (
                                <>
                                    <div className="bg-white rounded-xl p-3 shadow-lg">
                                        <div className="w-full text-center text-xs font-semibold mb-0.5">
                                            <p>Event details</p>
                                        </div>
                                        <div>
                                            <img src={selectedEvent.image} alt="" className={`w-full h-28 object-cover rounded-xl transition duration-700`} />
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className="font-semibold text-[12px]">{selectedEvent.name}</p>
                                            <div className=" rounded-xl bg-green-600 text-[10px] xl:text-xs flex items-center px-1">
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                        <div className="text-[8px] xl:text-[10px] w-[80%] text-justify">
                                            <p className="text-gray-400 text-[10px] xl:text-[12px]">Event details</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate.
                                                Viverra pulvinar sed nibh facilisi nisl mattis neque aliquam volutpat.
                                                Malesuada lacinia justo nisi et laoreet ac leo eget auctor.
                                                Eget elit nunc sit nam. In tellus laoreet nibh vestibulum.
                                            </p>
                                        </div>

                                        <div className="flex justify-between text-[8px] xl:text-[10px] mt-2">
                                            <div className="">
                                                <p className="text-gray-400">Event pricing</p>
                                                <p className="font-semibold">{selectedEvent.amount}</p>
                                            </div>

                                            <div className="">
                                                <p className="text-gray-400">Date</p>
                                                <p className="font-semibold">{selectedEvent.date}</p>
                                            </div>

                                            <div className="">
                                                <p className="text-gray-400">Time</p>
                                                <p className="font-semibold">{selectedEvent.time}</p>
                                            </div>

                                            <div className="">
                                                <p className="text-gray-400">Event location</p>
                                                <p className="font-semibold">{selectedEvent.location}</p>
                                            </div>
                                        </div>

                                        <div className="text-[8px] mt-2">
                                            <p className="text-[10px] text-gray-400">
                                                In Event
                                            </p>

                                            <div className="grid grid-cols-2 gap-3 scrollbar-hide overflow-y-auto h-[20vh] xl:h-[25vh] mt-1">
                                                {climbers.map((data) => (
                                                    <div key={data.id} style={{ backgroundImage: `url(${data.image})` }} className="w-[100%] xl:h-36 relative h-28 rounded-xl">
                                                        <div className="flex justify-between items-center absolute bottom-0 bg-gray-300 bg-opacity-60 backdrop-blur w-full rounded-xl p-2">
                                                            <div>
                                                                <p className="text-[9px]">{data.name}</p>
                                                                <p className="text-[7px]">
                                                                    <Link>View profile </Link>
                                                                </p>
                                                            </div>
                                                            <div className="text-white bg-black rounded-full p-1">
                                                                <p className="text-[10px] xl:text-[12px]">
                                                                    <IoIosSend />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className=" flex-row justify-center items-center shadow-[0px_19px_42px_rgba(0,0,0,0.1599999964237213)] bg-black rounded-[40px] flex w-fit p-1.5">
                                                    <span className=" font-['Helvetica'] text-[12px] font-normal text-[#fbf7f4] text-left relative">Review Messages</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ClimbersEvent_comp