import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function StatsChart() {

    const data = [
        {
            name: 'John merry',
            uv: 40,
            amt: 2400,
        },
        {
            name: 'Sarah adams',
            uv: 35,
            amt: 2210,
        },
        {
            name: 'Mary adams',
            uv: 20,
            amt: 2290,
        },
        {
            name: 'Mary adams',
            uv: 25,
            amt: 2000,
        },
        {
            name: 'Stephanie grey',
            uv: 10,
            amt: 2181,
        },
        {
            name: 'Sane more',
            uv: 30,
            amt: 20,
        },
    ];





    return (
        <div className='bg-white w-full h-full p-5 3xl:p-10 3xl:rounded-[40px]'>
            <div className=" w-full flex">
                <p className='3xl:text-5xl font-bold'>Stats</p>

                <div>

                </div>
            </div>
            <div className='w-full h-[300px] flex items-start 3xl:h-[600px] text-[8px] 3xl:text-2xl mt-10'>
                <ResponsiveContainer width="80%" height="80%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 30,
                        }}
                        maxBarSize={30}

                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <YAxis axisLine={false} />
                        <XAxis axisLine={false} dataKey="name" tick={<CustomXAxisTick />} dy={10} />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#B58563" radius={50} stroke />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default StatsChart







export const CustomXAxisTick = ({ x, y, payload }) => {
    const nameParts = payload.value.split(' '); // Split the name into parts
    const dy = 28; // Offset for line breaks

    return (
        <g transform={`translate(${x},${y})`} >
            {nameParts.map((part, index) => (
                <text
                    key={index}
                    x={0}
                    y={20}
                    dy={index === 0 ? 0 : dy} // Offset for line breaks
                    textAnchor="middle"
                    fill="#000"
                    className='mt-20'

                >
                    {part}
                </text>
            ))}
        </g>
    );
};