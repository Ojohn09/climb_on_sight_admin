

function Events_comp() {

    const eventData = [
        { id: 0, image: 'https://source.unsplash.com/random/300x200?sig=1', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 1, image: 'https://source.unsplash.com/random/300x200?sig=2', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 2, image: 'https://source.unsplash.com/random/300x200?sig=3', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 3, image: 'https://source.unsplash.com/random/300x200?sig=4', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 4, image: 'https://source.unsplash.com/random/300x200?sig=5', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 5, image: 'https://source.unsplash.com/random/300x200?sig=6', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
    ]


    return (
        <div>
            <div>
                <p className='text-sm font-semibold'>
                    Top events across the country
                </p>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    eventData.map((data) => (
                        <div
                            key={data.id}
                            //   onClick={() => handleEventClick(data)}
                            className={`bg-white rounded-lg p-2 w-fit cursor-pointer text-[8px]`}>
                            <div>
                                <img src={data.image} alt="" className='w-full rounded-lg h-2/3' />

                            </div>
                            <div className="flex justify-between w-auto mt-2 font-semibold">
                                <p>Climb off</p>
                                <p>{data.amount}</p>
                            </div>
                            <div className='flex text-[4px] gap-2'>
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
    )
}

export default Events_comp