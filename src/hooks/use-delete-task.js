import { useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";


export const useDeleteTask = (refreshTasks) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const removeHandler = (taskId) => {
		setIsDeleting(true);

		fetch(`${TASKS_RESORURSE}/${taskId}`, {
			method: 'DELETE'
		}).then(() => {
			refreshTasks();
		})
		.finally(() => {
			setIsDeleting(false);
		});
	}

	return { removeHandler, isDeleting };
};
