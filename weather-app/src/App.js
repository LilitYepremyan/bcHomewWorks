import "./App.css";
import sunny from "./images/01.svg";
import cloudy from "./images/05.svg";
import thunderstorm from "./images/09.svg";
import rainy from "./images/17.svg";

const weatherInfo = [
  {
    weekDey: "Monday",
    imgURL: sunny,
    temp: "36°C",
  },
  {
    weekDey: "Tuesday",
    imgURL: cloudy,
    temp: "32°C",
  },
  {
    weekDey: "Wednesday",
    imgURL: thunderstorm,
    temp: "35°C",
  },
  {
    weekDey: "Thursday",
    imgURL: rainy,
    temp: "45°C",
  },
  {
    weekDey: "Friday",
    imgURL: cloudy,
    temp: "36°C",
  },
  {
    weekDey: "Saturday",
    imgURL: sunny,
    temp: "37°C",
  },
  {
    weekDey: "Sunday",
    imgURL: rainy,
    temp: "39°C",
  },
];

const allDays = weatherInfo.map((el) => {
  return (
    <div className="weekDays">
      
      <h3 className="WeekDay">{el.weekDey}</h3>
      <img className="image" src={el.imgURL} />
      <h4 className="temp">{el.temp}</h4>
    </div>
  );
});

function App() {
  return <div className="App">{allDays}</div>;
}

export default App;
