import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  const topics = data.data;
  const info = topics.map((topic) => {
    return { name: topic.name, total: topic.total };
  });
  console.log(info);
  return (
    <div className="container mx-auto flex justify-center">
      <BarChart
        width={1200}
        height={800}
        data={info}
        className="bg-base-100 text-xl"
      >
        <XAxis dataKey="name" stroke="rgb(241 245 249)" />
        <YAxis stroke="rgb(241 245 249)" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="rgb(99 102 241)" barSize={50} />
      </BarChart>
    </div>
  );
};

export default Statistics;
