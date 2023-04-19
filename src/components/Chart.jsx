import { useEffect, useState } from "react";
import { BarChart, Label, LabelList, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ CityData }) => {
  const [CityDataList, setCityDataList] = useState([]);
  const DesktopSize = window.screen.width - 100;
  const Mobile = window.screen.width;
  let ChartWidth = window.screen.width > 600 ? DesktopSize : Mobile;
  const QueryList = ['Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg'];

  // Fetch query, City only ( maybe works with region aswell)
  const fetchCity = () => {
    QueryList.forEach(async (query) => {
      const response = await fetch(`https://polisen.se/api/events?locationname=${query}`);
      const apiData = await response.json();
      setCityDataList((CityDataList) => [...CityDataList, { Name: query, Count: apiData.length }]);
    });
  };

  useEffect(() => {
    console.log("Passed here");
    fetchCity();
  }, []);

  console.log(CityDataList, "look here");

  const SmallList = CityDataList.slice(0, 4).map((data) => ({
    name: data.Name,
    c1: data.Count,
  }));

  const BigList = CityDataList.map((data) => ({
    name: data.Name,
    c1: data.Count,
  }));

  if (CityDataList.length === 0) {
    return <div>Loading...</div>;
  }

  const data = window.screen.width > 600 ? BigList : SmallList;

  const formatDataKey = (value) => {
    return value >= 500 ? "500+" : value;
  };

  return (
    <div className="Chart">
      <BarChart width={ChartWidth} height={550} data={data}>
        <XAxis dataKey="name" stroke="white" />
        <YAxis label={{ value: 'Reports', angle: -90 }} />
        <Bar isAnimationActive={false} dataKey="c1" fill="#14AEA0">
          <LabelList dataKey="c1" position="insideTop" fill="white" angle="45" formatter={formatDataKey} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
