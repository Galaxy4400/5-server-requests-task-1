import { changeTask } from '../helpers';
import { useDeleteTask, useUpdateTask } from '../hooks';

export const TaskItem = ({ id, title, tasks, setTasks, refreshTasks }) => {
	const { removeHandler, isDeleting } = useDeleteTask(refreshTasks);
	const { updateHandler, isUpdating } = useUpdateTask(refreshTasks);

	return (
		<li className="tasks-list__item" key={id}>
			<div className="tasks-list__title">
				<span>{id}.</span>
				<input
					className="tasks-list__input"
					type="text"
					value={title}
					onChange={({ target }) => changeTask(id, target, tasks, setTasks)}
					onBlur={({ target }) => updateHandler(id, target)}
					readOnly={isUpdating}
				/>
			</div>
			<button className="tasks-list__remove" onClick={() => removeHandler(id)} disabled={isDeleting}>
				Удалить
			</button>
		</li>
	);
};
