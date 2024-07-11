import { useEffect, useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";

export const useGetTasks = (refreshTasksFlag) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(TASKS_RESORURSE)
			.then((response) => response.json())
			.then(setTasks)
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshTasksFlag]);

	return { tasks, setTasks, isLoading };
};
