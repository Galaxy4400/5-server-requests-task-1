import { useState } from "react";
import { TASKS_RESORURSE } from "../constants/tasks-resourse";

export const useCreateTask = (refreshTasks) => {
	const [isCreating, setIsCreating] = useState(false);

	const createHandler = (event) => {
		event.preventDefault();

		const $form = event.target;
		const formData = new FormData($form);

		setIsCreating(true);

		fetch(TASKS_RESORURSE, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(Object.fromEntries(formData.entries())),
		}).then(() => {
			refreshTasks();
			$form.reset();
		})
		.finally(() => {
			setIsCreating(false);
		});
	};

	return { createHandler, isCreating };
};
