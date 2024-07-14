import { isSearchNothing, isTaskDisplay } from '../helpers';
import { TaskItem } from './task-item';

export const TasksList = ({ tasks, isLoading, searchTerm, setTasks }) => {
	const loadingClass = isLoading ? 'is-loading' : '';

	return (
		<>
			<ul className={`tasks-list ${loadingClass}`}>
				{tasks.map(({ id, title }, index) => (
					isTaskDisplay(title, searchTerm) ? <TaskItem {...{ id, title, index, tasks, setTasks }} key={id} /> : null)
				)}
			</ul>
			{isSearchNothing(searchTerm, tasks) && <div>Ничего не найдено</div>}
		</>
	);
};
