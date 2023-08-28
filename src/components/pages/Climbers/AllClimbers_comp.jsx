import { useDispatch, useSelector } from "react-redux";
import { selectEvent1 } from "../../../redux/slices/features/eventSlice";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

function AllClimbers_comp() {

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
        { id: 10, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Ann James' },
        { id: 11, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Stephanie James' },
        { id: 12, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Angel Maria' },
        { id: 13, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Jesus Gabriel' },
        { id: 14, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Tony Stark' },
        { id: 15, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Steve Rogers' },
        { id: 16, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Bruce Banner' },
        { id: 17, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Thor Odin' },
        { id: 18, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Luke Skywalker' },
    ]

    const dispatch = useDispatch();
    const climbersEvent = useSelector((state) => state.event.climbersEvent);
    const [slideAnimation, setSlideAnimation] = useState("slide-in");


    const handleGuideClick = (event) => {
        setSlideAnimation("slide-out");
        console.log('Clicked on:', event);

        // Delay to allow the slide-out animation to complete
        setTimeout(() => {
            dispatch(selectEvent1(event));
            setSlideAnimation("slide-in"); // Slide in animation for new event
        }, 700);
    };

    return (
        <div>
            <div className='w-full flex  overflow-y-hidden'>
                <div className='lg:w-[60%] xl:w-[70%] h-[86vh] scrollbar-hide overflow-y-auto'>
                    <div className='h-[50px] p-2 fixed flex items-center justify-between lg:w-[53%] xl:w-[64%] z-10 bg-[#FBF7F4] border-b border-r'>
                        <p className='font-semibold'>All Climbers</p>
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
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 p-3'>
                        {climbers.map((data) => (
                            <div
                                onClick={() => handleGuideClick(data)}
                                key={data.id}
                                style={{ backgroundImage: `url(${data.image})` }} className="w-[100%] xl:h-36 relative h-28 rounded-xl bg-cover bg-center cursor-pointer">
                                <div className="flex justify-between items-center absolute bottom-0 bg-gray-300 bg-opacity-60 backdrop-blur w-full rounded-xl p-2">
                                    <div>
                                        <p className="text-[9px]">{data.name}</p>
                                        <p className="text-[7px]">
                                            <Link>View guide profile </Link>
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
                </div>
                <div className='lg:w-[40%] xl:w-[30%] lg:block hidden relative border-l'>
                    <div className='fixed p-2 border-b h-[50px] w-[40%] z-10 bg-[#FBF7F4]'>
                        <p>Selected climbers</p>
                    </div>

                    <div className="mt-12 overflow-hidden">
                        <div className={`p-3 ${slideAnimation} transition-all duration-700 overflow-hidden`}>
                            {climbersEvent && (
                                <>
                                    <div className="bg-white rounded-xl p-2 xl:p-2.5 shadow-lg">
                                        <div className="w-full text-center text-xs font-semibold mb-1">
                                            <p>Event details</p>
                                        </div>
                                        <div>
                                            <img src={climbersEvent.image} alt="" className={`w-full h-28 object-cover rounded-xl transition duration-700`} />
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <p className="font-semibold text-[12px]">{climbersEvent.name}</p>
                                            <div className=" rounded-xl bg-gray-200 text-[10px] xl:text-xs flex items-center px-1">
                                                <p className="capitalize">234 completed events</p>
                                            </div>
                                        </div>

                                        <div className="text-[10px] xl:text-[11px] flex justify-between mt-4">
                                            <div>
                                                <p className="text-gray-400">Interest</p>
                                                <p >Mountain climbing</p>
                                            </div>
                                            <div className="">
                                                <Link to='/climb-event' className="bg-black text-white rounded-xl text-center p-0.5 px-2">See All Events</Link>
                                            </div>
                                        </div>

                                        <div className="text-[8px] w-[80%] text-justify mt-2">
                                            <p className="text-gray-400 text-[10px]">Climber Bio</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate.
                                                Viverra pulvinar sed nibh facilisi nisl mattis neque aliquam volutpat.
                                                Malesuada lacinia justo nisi et laoreet ac leo eget auctor.
                                                Eget elit nunc sit nam. In tellus laoreet nibh vestibulum.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="mt-3 flex justify-center">
                                                <p className="bg-gray-200 text-[10px] p-1 font-semibold px-2 rounded-xl text-[#B58563]">
                                                    Gallery
                                                </p>
                                            </div>

                                            <div className="mt-1 xl:mt-2 overflow-hidden ">
                                                <div className="relative">
                                                    <div className="grid grid-cols-3 gap-2 h-[17vh] scrollbar-hide">
                                                        <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                        <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                        <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                        <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                        <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                        <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />

                                                    </div>
                                                    <div className="absolute bottom-1  flex left-[30%]">
                                                        <button className="flex text-xs bg-black text-white items-center gap-2 p-2 rounded-xl">
                                                            <span><HiChatBubbleBottomCenter /> </span> <span>Send a messeage</span>
                                                        </button>
                                                    </div>
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
        </div>
    )
}

export default AllClimbers_comp