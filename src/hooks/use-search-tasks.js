import { useEffect, useState } from 'react';
import { TASKS_RESORURSE } from '../constants/tasks-resourse';
import { useDebounce } from './use-debounce';

export const useSearchTasks = (setTasks, refreshTasks, isSorting) => {
	const [searchTerm, setSearchTerm] = useState(false);
	const [isSearching, setIsSearching] = useState(false);
	const [searchCount, setSearchCount] = useState(null);

	const debouncedSearchTerm = useDebounce(searchTerm);

	const searchReset = () => {
		refreshTasks();
		setSearchCount(null);
		setIsSearching(false);
	};

	useEffect(() => {
		if (!debouncedSearchTerm) {
			searchReset();
			return;
		}

		setIsSearching(true);

		fetch(`${TASKS_RESORURSE}?title_like=${debouncedSearchTerm}${isSorting ? '&_sort=title' : ''}`)
			.then((response) => response.json())
			.then((result) => {
				setTasks(result);
				setSearchCount(result.length);
			})
			.finally(() => {
				setIsSearching(false);
			});
	}, [debouncedSearchTerm]);

	return { searchTerm, setSearchTerm, isSearching, searchCount };
};
