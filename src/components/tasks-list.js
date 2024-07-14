import { TaskItem } from './task-item';

export const TasksList = ({ tasks, setTasks, isLoading, isSearching }) => {
	const loadingClass = (isLoading || isSearching) ? 'is-loading' : '';
	const isNothing = !isLoading && !tasks.length;

	return (
		<>
			<ul className={`tasks-list ${loadingClass}`}>
				{tasks.map(({id, title }, index) => (
					<TaskItem {...{id, index, title, tasks, setTasks }} key={id} />
				))}
			</ul>
			{isNothing && <div>Ничего не найдено</div>}
		</>
	);
};
