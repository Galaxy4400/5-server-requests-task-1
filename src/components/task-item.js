import { changeTask } from '../helpers';
import { useDeleteTask, useUpdateTask } from '../hooks';

export const TaskItem = ({ id, index, title, tasks, setTasks }) => {
	const { removeHandler, isDeleting } = useDeleteTask();
	const { updateHandler, isUpdating } = useUpdateTask();

	return (
		<li className="tasks-list__item">
			<div className="tasks-list__title">
				<span>{index+1}.</span>
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
