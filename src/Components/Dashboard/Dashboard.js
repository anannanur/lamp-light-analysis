import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const About = () => {
    const data = [
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
    return (
        <div className="bg-dark">
            <div className="container pb-5">
                <div className='row py-5'>
                    <div className="col-md-6">
                        <div className='text-center my-4'>
                            <h4 className='text-warning'>Month wise Sell</h4>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <LineChart width={350} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="month" stroke="#fff" />
                                <YAxis stroke="#fff" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sell" stroke="#FFC107" />
                            </LineChart>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='text-center my-4'>
                            <h4 className='text-warning'>Investment vs Revenue</h4>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <AreaChart width={350} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" stroke="#fff" />
                                <YAxis stroke="#fff" />
                                <CartesianGrid strokeDasharray="1 1" />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className='text-center my-4'>
                            <h4 className='text-warning'>Investment vs Revenue</h4>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <BarChart width={350} height={250} data={data}>
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="month" stroke="#fff" />
                                <YAxis stroke="#fff" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="investment" fill="#8884d8" />
                                <Bar dataKey="revenue" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className='text-center my-4'>
                            <h4 className='text-warning'>Investment vs Revenue</h4>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <PieChart width={350} height={250}>
                                <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                                <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                                <Tooltip />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;