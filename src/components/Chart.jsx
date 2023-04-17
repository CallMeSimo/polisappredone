import { useEffect, useState } from "react";

import { BarChart, Label, LabelList, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({CityData}) => {
	
	const [CityDataList, setCityDataList] = useState([]);

	
const QueryList = ['Stockholm', 'Göteborg', 'Malmö', 'Helsingborg'];
		  console.log(QueryList);

	// Fetch query, City only ( maybe works with region aswell)
  const fetchCity = () => {
	  QueryList.map( async(query) => {
			const response = await fetch(`https://polisen.se/api/events?locationname=${query}`);
			let apiData = await response.json();
			
			console.log(apiData.length, " This is ", query);
			setCityDataList(CityDataList => [...CityDataList, apiData.length]);

			console.log(CityDataList, "lookhere");
	  });
	  
  };
	
	 useEffect(() => {
	  fetchCity();
    }, []);
	
	
	// const OccurrencesAmount = () => {
	// var occurrences = {};
		// for (var i = 0, j = CityData.length; i < j; i++) {
		    // occurrences[CityData[i].location.name] = (occurrences[CityData[i].location.name] || 0) + 1;
		 // }
		// console.log(CityData.length);
	// console.log(occurrences);
	// return occurrences
	// }
	
	// const Occurrences = OccurrencesAmount();
	// console.log(Occurrences);
  
  
	const data =[
	{
		name: "Stockholm",
		c1: CityDataList[0],
	},
	{
		name: "Göteborg",
		c1: CityDataList[1],
	},
	{
		name: "Malmö",
		c1: CityDataList[2],
	},
	{
		name: "Helsingborg",
		c1: CityDataList[3],
	}];
	
    return (
        <div className="Chart">
            <BarChart width={400} height={550} data={data}>

			    <XAxis dataKey="name" stroke="white">
				</XAxis>
				<YAxis label={{ value: 'Reports', angle: -90}} />
			    <Bar isAnimationActive={false}  dataKey="c1" fill="#14AEA0">
					<LabelList dataKey="c1" position="insideTop" fill="white" angle="45"  />
				</Bar>
			</BarChart>
        </div>
    );
}	

export default Chart;