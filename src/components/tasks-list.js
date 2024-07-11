import { TaskItem } from './task-item';

export const TasksList = ({ tasks, setTasks, refreshTasks, isLoading, isSearching }) => {
	return (
		<>
			<ul className={`tasks-list ${(isLoading || isSearching) ? 'is-loading' : ''}`}>
				{tasks.map(({ id, title }) => (
					<TaskItem {...{ id, title, tasks, setTasks, refreshTasks }} />
				))}
			</ul>
			{!isLoading && !tasks.length && <div>Ничего не найдено</div>}
		</>
	);
};
