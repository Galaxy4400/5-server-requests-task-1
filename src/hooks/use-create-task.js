import { useState } from 'react';
import { push, ref } from 'firebase/database';
import { db } from '../firebase';

export const useCreateTask = () => {
	const [isCreating, setIsCreating] = useState(false);

	const createHandler = (event) => {
		event.preventDefault();

		const tasksDbRef = ref(db, 'tasks');

		const $form = event.target;
		const formData = new FormData($form);

		setIsCreating(true);

		push(tasksDbRef, Object.fromEntries(formData.entries()))
			.then(() => {
				$form.reset();
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return { createHandler, isCreating };
};
