import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [seconds, setSeconds] = useState(55);
	const [minutes, setMinutes] = useState(59);
	const [hours, setHours] = useState(23);

	// updating seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	// updating minutes
	useEffect(() => {
		if (seconds === 60) {
			setSeconds(0);
			setMinutes((prevMinutes) => prevMinutes + 1);
		}
	}, [seconds]);

	// updating hours
	useEffect(() => {
		if (minutes === 60) {
			setMinutes(0);
			setHours((prevHours) => prevHours + 1);
		}
	}, [minutes]);

	// resetting the clock
	useEffect(() => {
		if (hours === 24) {
			setHours(0);
			setMinutes(0);
			setSeconds(0);
		}
	}, [hours]);

	return (
		<div className="App">
			<h1>DIGITAL CLOCK</h1>
			<div className="clock">
				{hours < 10 ? `0${hours}` : hours}:
				{minutes < 10 ? `0${minutes}` : minutes}:
				{seconds < 10 ? `0${seconds}` : seconds}
			</div>
		</div>
	);
}

export default App;
