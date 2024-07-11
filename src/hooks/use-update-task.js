import { useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";

export const useUpdateTask = (refreshTasks) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateHandler = (taskId, input) => {
		setIsUpdating(true);

		fetch(`${TASKS_RESORURSE}/${taskId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: input.value }),
		}).then(() => {
			refreshTasks();
		})
		.finally(() => {
			setIsUpdating(false);
		});
	};

	return { updateHandler, isUpdating };
};
