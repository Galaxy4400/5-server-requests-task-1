import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useUpdateTask = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateHandler = (taskId, input) => {
		setIsUpdating(true);

		const updatingTaskDbRef = ref(db, `tasks/${taskId}`);

		set(updatingTaskDbRef, { title: input.value }).finally(() => {
			setIsUpdating(false);
		});
	};

	return { updateHandler, isUpdating };
};
