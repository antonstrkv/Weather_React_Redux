export { CreateMainTabs };

function CreateMainTabs() {

	const activateNewTab = tabBtn => {
		const idForTab = tabBtn.currentTarget.getAttribute('href');
		const currentTab = document.querySelector(idForTab);

		deleteActiveClassesTabs();

		currentTab.classList.add('main-tabs__block--active');
		tabBtn.currentTarget.classList.add('main-tabs__item--active');
	}

	const deleteActiveClassesTabs = () => {
		document.querySelectorAll('.main-tabs__block').forEach(tab => tab.classList.remove('main-tabs__block--active'));
		document.querySelectorAll('.main-tabs__item').forEach(tabBtn => tabBtn.classList.remove('main-tabs__item--active'));
	}

	return (
		<nav className="main-tabs">
			<a className="main-tabs__item main-tabs__item--active" href="#tab_1" onClick={activateNewTab}>
				Now
			</a>
			<a className="main-tabs__item" href="#tab_2" onClick={activateNewTab}>
				Details
			</a>
			<a className="main-tabs__item" href="#tab_3" onClick={activateNewTab}>
				Forecast
			</a>
		</nav>
	)
}