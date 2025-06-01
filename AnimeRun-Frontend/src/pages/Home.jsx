import React from "react";
import Button from "../components/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <div>
      <div className="text-center px-[5rem] flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[5rem]">Welcome NewBie</h1>
        <p className="py-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          natus quos est voluptates? Dicta, inventore! Pariatur illo
          praesentium, libero sit ullam, tenetur fugiat temporibus facere
          asperiores officiis vel non!
        </p>

        <div className="shadow-[2px_1px_5px_gray] rounded-[5px]">
          <LineChart width={500} height={300} data={data} className="m-[2rem]">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{ value: "X Axis", position: "insideBottom", offset: -10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Home;
