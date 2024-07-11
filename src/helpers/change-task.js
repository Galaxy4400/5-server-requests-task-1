export const changeTask = (taskId, input, tasks, setTasks) => {
	const changingTasks = tasks.map((task) => (task.id === taskId ? { ...task, title: input.value } : task));

	setTasks(changingTasks);
}
