const taskLauncher = () => {
	window.onhashchange = function() {
		setActivetask();
	};

	const setActivetask = () => {
		const currenttask = location.hash.replace("#/task-", "");
		const alltaskViews = document.getElementsByClassName(
			"app-task-launcher__content",
		);
		const activetask = document.getElementById(`task-view-${currenttask}`);

		Array.prototype.forEach.call(alltaskViews, function(taskView) {
			taskView.classList.add("-closed");
		});

		if (activetask) {
			activetask.classList.remove("-closed");
		}
	};

	setActivetask();
};

taskLauncher();
