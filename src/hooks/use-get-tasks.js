import { useEffect, useState } from "react";
import { onValue, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase";
import { formatFirebaseData } from "../helpers";


export const useGetTasks = (isSorting) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let tasksDbRef = ref(db, 'tasks');

		if (isSorting) {
			tasksDbRef = query(tasksDbRef, orderByChild('title'));
		}

		const unsubscribe = onValue(tasksDbRef, (snapshot) => {
			const tasks = formatFirebaseData(snapshot);

			setTasks(tasks);
			setIsLoading(false);
		});

		return () => unsubscribe();
	}, [isSorting]);

	return { tasks, setTasks, isLoading };
};
