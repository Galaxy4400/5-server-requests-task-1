import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useDeleteTask = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const removeHandler = (taskId) => {
		setIsDeleting(true);

		const delitingTaskDbRef = ref(db, `tasks/${taskId}`);

		remove(delitingTaskDbRef).finally(() => {
			setIsDeleting(false);
		});
	};

	return { removeHandler, isDeleting };
};
