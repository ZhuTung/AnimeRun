import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import useGetRecord from "../utils/hooks/useGetRecord";
import dayjs from "dayjs";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  const { data } = useGetRecord(user?.id);

  const [avgDistance, setAvgDistance] = useState(0);
  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);
  const [avgHeartRate, setAvgHeartRate] = useState(0);

  useEffect(() => {
    const totalDistance = data?.reduce(
      (acc, record) => acc + record.distance,
      0
    );
    const totalCalories = data?.reduce(
      (acc, record) => acc + record.calories_burned,
      0
    );
    const totalHeartRate = data?.reduce(
      (acc, record) => acc + record.avg_heart_rate,
      0
    );

    setAvgDistance(totalDistance / data?.length);
    setTotalCaloriesBurned(totalCalories);
    setAvgHeartRate(totalHeartRate / data?.length);
  }, [data]);

  return (
    <div>
      <div className="text-center px-[5rem] flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[5rem]">Welcome {user?.username}</h1>
        <p className="py-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          natus quos est voluptates? Dicta, inventore! Pariatur illo
          praesentium, libero sit ullam, tenetur fugiat temporibus facere
          asperiores officiis vel non!
        </p>

        <div className="mb-[1rem]">
          <h1 className="text-[3rem] font-bold">Distance Runned</h1>
          <div className="shadow-[2px_1px_5px_gray] rounded-[5px] my-[1.5rem] pt-[1.5rem]">
            <h1>Average Distance: {avgDistance.toFixed(2)} km</h1>
            <LineChart
              width={600}
              height={300}
              data={data}
              className="m-[2rem]"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(dateStr) => dayjs(dateStr).format("MMM D")}
                label={{
                  value: "Date",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis dataKey="distance" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="distance"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>

        <div className="mb-[1rem]">
          <h1 className="text-[3rem] font-bold">Calories</h1>
          <div className="shadow-[2px_1px_5px_gray] rounded-[5px] my-[1.5rem] pt-[1.5rem]">
            <h1>Total Calories Burned: {totalCaloriesBurned} cal</h1>
            <LineChart
              width={600}
              height={300}
              data={data}
              className="m-[2rem]"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(dateStr) => dayjs(dateStr).format("MMM D")}
                label={{
                  value: "Date",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis dataKey="calories_burned" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="calories_burned"
                stroke="#1aff1a"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>

        <div className="mb-[1rem]">
          <h1 className="text-[3rem] font-bold">Heart Rate</h1>
          <div className="shadow-[2px_1px_5px_gray] rounded-[5px] my-[1.5rem] pt-[1.5rem]">
            <h1>Average Heart Rate: {avgHeartRate.toFixed(2)} bpm</h1>
            <LineChart
              width={600}
              height={300}
              data={data}
              className="m-[2rem]"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(dateStr) => dayjs(dateStr).format("MMM D")}
                label={{
                  value: "Date",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis dataKey="avg_heart_rate" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="avg_heart_rate"
                stroke="#0099ff"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
