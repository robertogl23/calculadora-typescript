import { $ } from './dom';
import Events from './Events';

export enum THEMES {
	THEME_1 = 1,
	THEME_2 = 2,
	THEME_3 = 3,
}

class ToggleTheme {
	private defaultTheme: THEMES = THEMES.THEME_1;
	public readonly keyLS: string = 'theme-calc';
	public browserTheme: THEMES =
		parseInt(localStorage.getItem(this.keyLS)!) || this.defaultTheme;

	public getThemeValidated(theme: THEMES): THEMES {
		if (theme <= 3 && theme > 0) return theme;

		return this.defaultTheme;
	}
	public setStyles(theme: THEMES): void {
		switch (theme) {
			case THEMES.THEME_1:
				document.body.classList.remove('theme-2', 'theme-3');
				break;
			case THEMES.THEME_2:
				document.body.classList.remove('theme-1', 'theme-3');
				document.body.classList.add('theme-2');
				break;
			case THEMES.THEME_3:
				document.body.classList.remove('theme-1', 'theme-2');
				document.body.classList.add('theme-3');
				break;
			default:
				break;
		}
	}

	public changeTheme(theme: THEMES, add: boolean = true): void {
		const validateTheme = this.getThemeValidated(theme);
		localStorage.setItem(this.keyLS, JSON.stringify(validateTheme));
		this.setStyles(validateTheme);
		add && this.setCircle(validateTheme);
	}

	public StartTheme(): void {
		this.changeTheme(this.browserTheme);
		this.StartEvents();
	}

	public StartEvents(): void {
		const listDrag = document.getElementsByName('drag');
		const dragElement = document.getElementById('circle');
		dragElement?.addEventListener('dragstart', Events.onDragStart);
		listDrag.forEach((drag) => {
			drag.addEventListener('drop', Events.onDrop);
			drag.addEventListener('dragover', Events.onDragOver);
			drag.addEventListener('click', Events.onClick);
		});
	}

	public CircleDraggable(theme: THEMES): HTMLSpanElement {
		const circle = document.createElement('span');
		circle.classList.add('circle', 'container');
		circle.setAttribute('draggable', 'true');
		circle.setAttribute('theme', `${theme}`);
		circle.id = 'circle';
		return circle;
	}

	public setCircle(theme: THEMES): void {
		const element = document.getElementById(`${theme}`);
		element?.appendChild(this.CircleDraggable(theme));
	}
}
export default ToggleTheme;
