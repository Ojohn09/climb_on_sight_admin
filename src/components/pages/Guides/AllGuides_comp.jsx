import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../../../redux/slices/features/eventSlice";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import { MdDoneOutline, MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { setActiveTab } from "../../../redux/slices/features/activeTabSlice";

function AllGuides_comp() {

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
    const selectedEvent = useSelector((state) => state.event.selectedEvent);
    const [slideAnimation, setSlideAnimation] = useState("slide-in");
    const activeTab = useSelector((state) => state.activeTab);

    const handleTabClick = (tab) => {
        dispatch(setActiveTab(tab));
    };


    const handleGuideClick = (guide) => {
        setSlideAnimation("slide-out");

        // Delay to allow the slide-out animation to complete
        setTimeout(() => {
            dispatch(selectEvent(guide));
            setSlideAnimation("slide-in"); // Slide in animation for new event
        }, 700);
    };

    return (
        <div>
            <div className='w-full flex  overflow-y-hidden'>
                <div className='lg:w-[60%] xl:w-[70%] h-[86vh] scrollbar-hide overflow-y-auto'>
                    <div className='h-[50px] p-2 fixed flex items-center justify-between lg:w-[53%] xl:w-[64%] z-10 bg-[#FBF7F4] border-b border-r'>
                        <p className='font-semibold'>All Guides</p>
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
                                style={{ backgroundImage: `url(${data.image})` }} className="w-[100%] xl:h-36 relative h-28 rounded-xl bg-cover bg-center">
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
                        <p>Selected guide</p>
                    </div>

                    <div className="mt-12 overflow-hidden">
                        <div className={`p-3 ${slideAnimation} transition-all duration-700 overflow-hidden`}>
                            {selectedEvent && (
                                <>
                                    <div className="bg-white rounded-xl p-1.5 xl:p-2.5 shadow-lg">
                                        <div className="w-full text-center text-xs font-semibold mb-1">
                                            <p>Event details</p>
                                        </div>
                                        <div>
                                            <img src={selectedEvent.image} alt="" className={`w-full h-20 xl:h-28 object-cover rounded-xl transition duration-700`} />
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className="font-semibold text-[12px]">{selectedEvent.name}</p>
                                            <div className=" rounded-xl bg-gray-200 text-[10px] xl:text-xs flex items-center px-1">
                                                <p className="capitalize">234 completed events</p>
                                            </div>
                                        </div>
                                        <div className="text-[10px] xl:text-[12px] mt-1">
                                            <p className="text-[8px]">status</p>
                                            <p className="flex items-center">
                                                <span>Verified</span>
                                                <span className="text-green-400 bg-gray-200 rounded-full"><MdDoneOutline /></span>
                                            </p>
                                        </div>
                                        <div className="text-[10px] xl:text-[12px] flex justify-between mt-1">
                                            <div>
                                                <p>Customer Ratings</p>
                                                <div className="w-16 h-auto">
                                                    <svg className="" viewBox="0 0 105 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.54894 2.92705C7.8483 2.00574 9.1517 2.00574 9.45106 2.92705L10.1839 5.18237C10.3177 5.5944 10.7017 5.87336 11.1349 5.87336L13.5063 5.87336C14.475 5.87336 14.8778 7.11297 14.0941 7.68237L12.1756 9.07624C11.8251 9.33088 11.6784 9.78225 11.8123 10.1943L12.5451 12.4496C12.8445 13.3709 11.79 14.137 11.0063 13.5676L9.08778 12.1738C8.7373 11.9191 8.2627 11.9191 7.91221 12.1738L5.99372 13.5676C5.21001 14.137 4.15553 13.3709 4.45488 12.4496L5.18768 10.1943C5.32155 9.78225 5.1749 9.33088 4.82441 9.07624L2.90592 7.68237C2.1222 7.11297 2.52498 5.87336 3.4937 5.87336L5.86509 5.87336C6.29832 5.87336 6.68227 5.5944 6.81614 5.18237L7.54894 2.92705Z" fill="#F2C37B" />
                                                        <path d="M29.5489 2.92705C29.8483 2.00574 31.1517 2.00574 31.4511 2.92705L32.1839 5.18237C32.3177 5.5944 32.7017 5.87336 33.1349 5.87336L35.5063 5.87336C36.475 5.87336 36.8778 7.11297 36.0941 7.68237L34.1756 9.07624C33.8251 9.33088 33.6784 9.78225 33.8123 10.1943L34.5451 12.4496C34.8445 13.3709 33.79 14.137 33.0063 13.5676L31.0878 12.1738C30.7373 11.9191 30.2627 11.9191 29.9122 12.1738L27.9937 13.5676C27.21 14.137 26.1555 13.3709 26.4549 12.4496L27.1877 10.1943C27.3216 9.78225 27.1749 9.33088 26.8244 9.07624L24.9059 7.68237C24.1222 7.11297 24.525 5.87336 25.4937 5.87336L27.8651 5.87336C28.2983 5.87336 28.6823 5.5944 28.8161 5.18237L29.5489 2.92705Z" fill="#F2C37B" />
                                                        <path d="M51.5489 2.92705C51.8483 2.00574 53.1517 2.00574 53.4511 2.92705L54.1839 5.18237C54.3177 5.5944 54.7017 5.87336 55.1349 5.87336L57.5063 5.87336C58.475 5.87336 58.8778 7.11297 58.0941 7.68237L56.1756 9.07624C55.8251 9.33088 55.6784 9.78225 55.8123 10.1943L56.5451 12.4496C56.8445 13.3709 55.79 14.137 55.0063 13.5676L53.0878 12.1738C52.7373 11.9191 52.2627 11.9191 51.9122 12.1738L49.9937 13.5676C49.21 14.137 48.1555 13.3709 48.4549 12.4496L49.1877 10.1943C49.3216 9.78225 49.1749 9.33088 48.8244 9.07624L46.9059 7.68237C46.1222 7.11297 46.525 5.87336 47.4937 5.87336L49.8651 5.87336C50.2983 5.87336 50.6823 5.5944 50.8161 5.18237L51.5489 2.92705Z" fill="#F2C37B" />
                                                        <path d="M73.5489 2.92705C73.8483 2.00574 75.1517 2.00574 75.4511 2.92705L76.1839 5.18237C76.3177 5.5944 76.7017 5.87336 77.1349 5.87336L79.5063 5.87336C80.475 5.87336 80.8778 7.11297 80.0941 7.68237L78.1756 9.07624C77.8251 9.33088 77.6784 9.78225 77.8123 10.1943L78.5451 12.4496C78.8445 13.3709 77.79 14.137 77.0063 13.5676L75.0878 12.1738C74.7373 11.9191 74.2627 11.9191 73.9122 12.1738L71.9937 13.5676C71.21 14.137 70.1555 13.3709 70.4549 12.4496L71.1877 10.1943C71.3216 9.78225 71.1749 9.33088 70.8244 9.07624L68.9059 7.68237C68.1222 7.11297 68.525 5.87336 69.4937 5.87336L71.8651 5.87336C72.2983 5.87336 72.6823 5.5944 72.8161 5.18237L73.5489 2.92705Z" fill="#F2C37B" />
                                                        <path d="M95.5489 2.92705C95.8483 2.00574 97.1517 2.00574 97.4511 2.92705L98.1839 5.18237C98.3177 5.5944 98.7017 5.87336 99.1349 5.87336L101.506 5.87336C102.475 5.87336 102.878 7.11297 102.094 7.68237L100.176 9.07624C99.8251 9.33088 99.6784 9.78225 99.8123 10.1943L100.545 12.4496C100.844 13.3709 99.79 14.137 99.0063 13.5676L97.0878 12.1738C96.7373 11.9191 96.2627 11.9191 95.9122 12.1738L93.9937 13.5676C93.21 14.137 92.1555 13.3709 92.4549 12.4496L93.1877 10.1943C93.3216 9.78225 93.1749 9.33088 92.8244 9.07624L90.9059 7.68237C90.1222 7.11297 90.525 5.87336 91.4937 5.87336L93.8651 5.87336C94.2983 5.87336 94.6823 5.5944 94.8161 5.18237L95.5489 2.92705Z" fill="#F2C37B" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="bg-black text-white rounded-xl text-center p-0.5 px-2">See All Events</p>
                                            </div>
                                        </div>

                                        <div className="text-[8px] w-[80%] text-justify mt-1">
                                            <p className="text-gray-400 text-[10px]">Guide Bio</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Molestie erat vel suscipit lacinia vulputate.
                                                Viverra pulvinar sed nibh facilisi nisl mattis neque aliquam volutpat.
                                                Malesuada lacinia justo nisi et laoreet ac leo eget auctor.
                                                Eget elit nunc sit nam. In tellus laoreet nibh vestibulum.
                                            </p>
                                        </div>

                                        <div className="text-[8px]  w-[80%] text-justify mt-1">
                                            <p className="text-gray-400 text-[10px] xl:text-[12px]">Experience</p>
                                            <p> 6 Years experience in ice climbing</p>
                                            <p>2 Years experience in mountain climbing</p>
                                        </div>

                                        <div>
                                            <div className="mt-3 flex justify-center">
                                                <ul className="flex text-[9px] bg-gray-200 p-0.5 xl:p-1 w-fit gap-0.5 rounded-xl font-semibold">
                                                    <li
                                                        onClick={() => handleTabClick('tab1')}
                                                        className={`p-1 cursor-pointer ${activeTab === 'tab1' ? 'bg-white rounded-xl text-[#B58563]' : ''
                                                            }`}
                                                    >
                                                        Recent
                                                    </li>
                                                    <li
                                                        onClick={() => handleTabClick('tab2')}
                                                        className={`p-1 cursor-pointer ${activeTab === 'tab2' ? 'bg-white rounded-xl text-black px-2' : ''
                                                            }`}
                                                    >
                                                        All
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-1 xl:mt-2 overflow-hidden ">
                                                {activeTab === 'tab1' ?
                                                    <div className="relative">
                                                        <div className="grid grid-cols-3 gap-2 h-[17vh] scrollbar-hide">
                                                            <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                            <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                            <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                            <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                            <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />
                                                            <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="rounded-xl w-full h-[70px] xl:h-28" />

                                                        </div>
                                                        <div className="absolute bottom-1  flex left-[35%]">
                                                            <button className="flex text-xs bg-black text-white p-2 rounded-xl">
                                                                <span> </span> <span>Send a messeage</span>
                                                            </button>
                                                        </div>
                                                    </div> :
                                                    <div >
                                                        <div className="bg-gray-200 p-1 rounded-xl">
                                                            <div className=" flex gap-1 items-center">
                                                                <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" className="w-7 h-7 xl:w-8 xl:h-8 rounded-full" />
                                                                <div className="text-[10px] ">
                                                                    <p className="font-semibold">Tricia Matei</p>
                                                                    <p className="text-gray-400">
                                                                        Climber
                                                                    </p>
                                                                </div>

                                                            </div>
                                                            <p className="text-[8px]">
                                                                Lorem ipsum dolor sit amet consectetur. Nunc ullamcorper neque quam laoreet tellus vulputate.
                                                                Purus vulputate tristique convallis magna velit velit dui ultrices consectetur.
                                                                Sit enim etiam aenean lobortis non interdum.

                                                            </p>
                                                            <div className="w-12 h-auto">
                                                                <svg className="" viewBox="0 0 105 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.54894 2.92705C7.8483 2.00574 9.1517 2.00574 9.45106 2.92705L10.1839 5.18237C10.3177 5.5944 10.7017 5.87336 11.1349 5.87336L13.5063 5.87336C14.475 5.87336 14.8778 7.11297 14.0941 7.68237L12.1756 9.07624C11.8251 9.33088 11.6784 9.78225 11.8123 10.1943L12.5451 12.4496C12.8445 13.3709 11.79 14.137 11.0063 13.5676L9.08778 12.1738C8.7373 11.9191 8.2627 11.9191 7.91221 12.1738L5.99372 13.5676C5.21001 14.137 4.15553 13.3709 4.45488 12.4496L5.18768 10.1943C5.32155 9.78225 5.1749 9.33088 4.82441 9.07624L2.90592 7.68237C2.1222 7.11297 2.52498 5.87336 3.4937 5.87336L5.86509 5.87336C6.29832 5.87336 6.68227 5.5944 6.81614 5.18237L7.54894 2.92705Z" fill="#F2C37B" />
                                                                    <path d="M29.5489 2.92705C29.8483 2.00574 31.1517 2.00574 31.4511 2.92705L32.1839 5.18237C32.3177 5.5944 32.7017 5.87336 33.1349 5.87336L35.5063 5.87336C36.475 5.87336 36.8778 7.11297 36.0941 7.68237L34.1756 9.07624C33.8251 9.33088 33.6784 9.78225 33.8123 10.1943L34.5451 12.4496C34.8445 13.3709 33.79 14.137 33.0063 13.5676L31.0878 12.1738C30.7373 11.9191 30.2627 11.9191 29.9122 12.1738L27.9937 13.5676C27.21 14.137 26.1555 13.3709 26.4549 12.4496L27.1877 10.1943C27.3216 9.78225 27.1749 9.33088 26.8244 9.07624L24.9059 7.68237C24.1222 7.11297 24.525 5.87336 25.4937 5.87336L27.8651 5.87336C28.2983 5.87336 28.6823 5.5944 28.8161 5.18237L29.5489 2.92705Z" fill="#F2C37B" />
                                                                    <path d="M51.5489 2.92705C51.8483 2.00574 53.1517 2.00574 53.4511 2.92705L54.1839 5.18237C54.3177 5.5944 54.7017 5.87336 55.1349 5.87336L57.5063 5.87336C58.475 5.87336 58.8778 7.11297 58.0941 7.68237L56.1756 9.07624C55.8251 9.33088 55.6784 9.78225 55.8123 10.1943L56.5451 12.4496C56.8445 13.3709 55.79 14.137 55.0063 13.5676L53.0878 12.1738C52.7373 11.9191 52.2627 11.9191 51.9122 12.1738L49.9937 13.5676C49.21 14.137 48.1555 13.3709 48.4549 12.4496L49.1877 10.1943C49.3216 9.78225 49.1749 9.33088 48.8244 9.07624L46.9059 7.68237C46.1222 7.11297 46.525 5.87336 47.4937 5.87336L49.8651 5.87336C50.2983 5.87336 50.6823 5.5944 50.8161 5.18237L51.5489 2.92705Z" fill="#F2C37B" />
                                                                    <path d="M73.5489 2.92705C73.8483 2.00574 75.1517 2.00574 75.4511 2.92705L76.1839 5.18237C76.3177 5.5944 76.7017 5.87336 77.1349 5.87336L79.5063 5.87336C80.475 5.87336 80.8778 7.11297 80.0941 7.68237L78.1756 9.07624C77.8251 9.33088 77.6784 9.78225 77.8123 10.1943L78.5451 12.4496C78.8445 13.3709 77.79 14.137 77.0063 13.5676L75.0878 12.1738C74.7373 11.9191 74.2627 11.9191 73.9122 12.1738L71.9937 13.5676C71.21 14.137 70.1555 13.3709 70.4549 12.4496L71.1877 10.1943C71.3216 9.78225 71.1749 9.33088 70.8244 9.07624L68.9059 7.68237C68.1222 7.11297 68.525 5.87336 69.4937 5.87336L71.8651 5.87336C72.2983 5.87336 72.6823 5.5944 72.8161 5.18237L73.5489 2.92705Z" fill="#F2C37B" />
                                                                    <path d="M95.5489 2.92705C95.8483 2.00574 97.1517 2.00574 97.4511 2.92705L98.1839 5.18237C98.3177 5.5944 98.7017 5.87336 99.1349 5.87336L101.506 5.87336C102.475 5.87336 102.878 7.11297 102.094 7.68237L100.176 9.07624C99.8251 9.33088 99.6784 9.78225 99.8123 10.1943L100.545 12.4496C100.844 13.3709 99.79 14.137 99.0063 13.5676L97.0878 12.1738C96.7373 11.9191 96.2627 11.9191 95.9122 12.1738L93.9937 13.5676C93.21 14.137 92.1555 13.3709 92.4549 12.4496L93.1877 10.1943C93.3216 9.78225 93.1749 9.33088 92.8244 9.07624L90.9059 7.68237C90.1222 7.11297 90.525 5.87336 91.4937 5.87336L93.8651 5.87336C94.2983 5.87336 94.6823 5.5944 94.8161 5.18237L95.5489 2.92705Z" fill="#F2C37B" />
                                                                </svg>
                                                            </div>

                                                        </div>

                                                        <div className="mx-auto w-[70%] flex justify-evenly mt-1.5 xl:mt-3">
                                                            <button>
                                                                <MdKeyboardArrowLeft />
                                                            </button>

                                                            <button>
                                                                <MdKeyboardArrowRight />
                                                            </button>
                                                        </div>
                                                    </div>

                                                }
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

export default AllGuides_comp