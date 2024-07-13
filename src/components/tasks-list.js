import { TaskItem } from './task-item';

export const TasksList = ({ tasks, setTasks, refreshTasks, isLoading, isSearching }) => {
	const loadingClass = (isLoading || isSearching) ? 'is-loading' : '';
	const isNothing = !isLoading && !tasks.length;

	return (
		<>
			<ul className={`tasks-list ${loadingClass}`}>
				{tasks.map(({ id, title }) => (
					<TaskItem {...{ id, title, tasks, setTasks, refreshTasks }} />
				))}
			</ul>
			{isNothing && <div>Ничего не найдено</div>}
		</>
	);
};
