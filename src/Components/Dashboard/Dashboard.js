import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];

function Dashboard() {
    return (
        <>
            <div className="md:flex w-11/12 mx-auto py-10">
                <div className='w-full'>
                    <h1 className="text-3xl font-semibold text-center my-4">Line Chart</h1>
                    <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart data={pdata} width='100%' height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" interval={'preserveStartEnd'} tickFormatter={(value) => value + " data"} />
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor: 'white' }} />
                            <Legend />
                            <Line type="monotone" dataKey="sell" stroke="blue" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="investment" stroke="red" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="revenue" stroke="green" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
                <div className="w-full">
                    <h1 className="text-3xl font-semibold text-center my-4">Area Chart</h1>
                    <ResponsiveContainer width="100%" aspect={3}>
                        <AreaChart
                            width={500}
                            height={300}
                            data={pdata}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='w-10/12 mx-auto'>
                <h1 className="text-3xl font-semibold text-center my-4">Bar Chart</h1>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                        width={500}
                        height={300}
                        data={pdata}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default Dashboard;
