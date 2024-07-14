import './app.scss';
import { useState } from 'react';
import { useCreateTask, useGetTasks, useSearchTasks } from './hooks';
import { TasksList } from './components/tasks-list';

export const App = () => {
	const [isSorting, setIsSorting] = useState(false);

	const { tasks, setTasks, isLoading } = useGetTasks(isSorting);
	const { createHandler, isCreating } = useCreateTask();
	const { setSearchTerm, isSearching } = useSearchTasks(setTasks, isSorting);

	return (
		<div className="tasks">
			<form className="tasks-form" onSubmit={createHandler}>
				<input className="tasks-form__input input" name="title" type="text" />
				<button className="tasks-form__button button" type="submit" disabled={isCreating}>Добавить новую задачу</button>
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
				<TasksList {...{ tasks, setTasks, isLoading, isSearching }} />
			</div>
		</div>
	);
};
