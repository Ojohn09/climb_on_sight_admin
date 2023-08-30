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
            uv: 30,
            amt: 2210,
        },
        {
            name: 'Mary adams',
            uv: 20,
            amt: 2290,
        },
        {
            name: 'Mary adams',
            uv: 20,
            amt: 2000,
        },
        {
            name: 'Stephanie grey',
            uv: 10,
            amt: 2181,
        },
        {
            name: 'Stephanie grey',
            uv: 5,
            amt: 2500,
        },
        {
            name: 'Sane more',
            uv: 30,
            amt: 2100,
        },
    ];

    return (
        <div className='bg-white w-full h-full p-5'>
            <div style={{ width: '100%', height: '500px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={50}
                        height={30}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" fill="#B58563" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default StatsChart