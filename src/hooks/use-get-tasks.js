import { useEffect, useState } from 'react';
import { onValue, orderByChild, query, ref } from 'firebase/database';
import { db } from '../firebase';
import { formatFirebaseData } from '../helpers';

export const useGetTasks = (isSorting) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let tasksDbRef = ref(db, 'tasks');

		if (isSorting) {
			tasksDbRef = query(tasksDbRef, orderByChild('title'));
		}

		return onValue(tasksDbRef, (snapshot) => {
			const tasks = formatFirebaseData(snapshot);

			setTasks(tasks);
			setIsLoading(false);
		});
	}, [isSorting]);

	return { tasks, setTasks, isLoading };
};
