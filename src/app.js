import { useEffect, useState } from 'react';
import './app.scss';

export const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(result => {
				console.log(result);
				setTasks(result);
			});
	}, []);

	return (
		<div className='tasks'>
			<ul className='tasks__list'>
				{tasks.map(({id, title}) => <li className='tasks__item' key={id}>{title}</li>)}
			</ul>
		</div>
	);
};
