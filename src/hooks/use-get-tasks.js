import { useEffect, useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";

export const useGetTasks = (refreshTasksFlag, isSorting) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(`${TASKS_RESORURSE}${isSorting ? '?_sort=title' : ''}`)
			.then((response) => response.json())
			.then(setTasks)
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshTasksFlag, isSorting]);

	return { tasks, setTasks, isLoading };
};
