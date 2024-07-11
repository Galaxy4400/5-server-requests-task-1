import { TaskItem } from './task-item';

export const TasksList = ({ tasks, setTasks, refreshTasks, isLoading }) => {
	return (
		<>
			{!isLoading ? (
				<ul className="tasks-list">
					{tasks.map(({ id, title }) => (
						<TaskItem {...{ id, title, tasks, setTasks, refreshTasks }} />
					))}
				</ul>
			) : (
				<div>Загрузка...</div>
			)}
		</>
	);
};
