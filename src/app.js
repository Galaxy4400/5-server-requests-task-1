import './app.scss';
import { useEffect, useState } from 'react';

const TASKS_RESORURSE = 'http://localhost:3005/tasks/';

export const App = () => {
	const [tasks, setTasks] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);

	function refreshTasks() {
		setRefreshTasksFlag(!refreshTasksFlag);
	}

	useEffect(() => {
		fetch(TASKS_RESORURSE)
			.then((response) => response.json())
			.then(setTasks);
	}, [refreshTasksFlag]);

	function createHandler(event) {
		event.preventDefault();

		const $form = event.target;
		const formData = new FormData($form);

		fetch(TASKS_RESORURSE, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(Object.fromEntries(formData.entries())),
		}).then(() => {
			refreshTasks();
			$form.reset();
		});
	}

	function removeHandler(taskId) {
		fetch(TASKS_RESORURSE + taskId, { method: 'DELETE' }).then(() => {
			refreshTasks();
		});
	}

	function patchHandler(input, taskId) {
		fetch(TASKS_RESORURSE + taskId, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: input.value }),
		}).then(() => {
			refreshTasks();
		});
	}

	function changeTask(input, id) {
		const changingTasks = tasks.map((task) => (task.id === id ? { ...task, title: input.value } : task));
		setTasks(changingTasks);
	}

	function isSearched(title) {
		if (!searchString) return true;

		return title.includes(searchString);
	}

	return (
		<div className="tasks">
			<form className="tasks-form" onSubmit={createHandler}>
				<input className="tasks-form__input input" name="title" type="text" />
				<button className="tasks-form__button" type="submit">
					Добавить новую задачу
				</button>
			</form>
			<div className="tasks-container">
				<div className="tasks-container__header">
					<h1 className="tasks-container__title">Список задач</h1>
					<input
						className="tasks-container__search input"
						type="text"
						placeholder="Поиск..."
						value={searchString}
						onChange={({ target }) => setSearchString(target.value)}
					/>
				</div>
				<ul className="tasks-list">
					{tasks.map(({ id, title }) =>
						isSearched(title) ? (
							<li className="tasks-list__item" key={id}>
								<div className="tasks-list__title">
									<span>{id}.</span>
									<input
										className="tasks-list__input"
										type="text"
										value={title}
										onChange={({ target }) => changeTask(target, id)}
										onBlur={({ target }) => patchHandler(target, id)}
									/>
								</div>
								<button className="tasks-list__remove" onClick={() => removeHandler(id)}>
									Удалить
								</button>
							</li>
						) : null,
					)}
				</ul>
			</div>
		</div>
	);
};
