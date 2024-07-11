import './app.scss';
import { useState } from 'react';
import { useCreateTask, useGetTasks, useSearchTasks } from './hooks';
import { TasksList } from './components/tasks-list';

export const App = () => {
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);
	const [isSorting, setIsSorting] = useState(false);

	const refreshTasks = () => setRefreshTasksFlag(!refreshTasksFlag);

	const { tasks, setTasks, isLoading } = useGetTasks(refreshTasksFlag, isSorting);
	const { createHandler, isCreating } = useCreateTask(refreshTasks);
	const { setSearchTerm, isSearching } = useSearchTasks(setTasks, refreshTasks, isSorting);

	return (
		<div className="tasks">
			<form className="tasks-form" onSubmit={createHandler}>
				<input className="tasks-form__input input" name="title" type="text" />
				<button className="tasks-form__button button" type="submit" disabled={isCreating}>
					{'Добавить новую задачу'}
				</button>
			</form>
			<div className="tasks-container">
				<div className="tasks-container__header">
					<h1 className="tasks-container__title">Список задач</h1>
					<button className="tasks-container__sort button" type="button" onClick={() => setIsSorting(!isSorting)} disabled={isLoading}>
						{isSorting ? `Отключить сортировку` : `Включить сортировку`}
					</button>
					<input
						className="tasks-container__search input"
						type="text"
						placeholder="Поиск..."
						onChange={({ target }) => setSearchTerm(target.value)}
					/>
				</div>
				<TasksList {...{ tasks, setTasks, refreshTasks, isLoading, isSearching }} />
			</div>
		</div>
	);
};
