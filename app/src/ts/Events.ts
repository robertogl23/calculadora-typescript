import { $$ } from './dom';
import ToggleTheme from './ToggleTheme';

class Events {
	public static onDragStart(event: any) {
		event.dataTransfer.setData(
			'text/plain',
			event.target.id
		);
		console.log('hola1',event.target);
	}

	public static onDragOver(event: any): void {
		event.preventDefault();
	}

	public static onDrop(event: any): void {
		const id = event.dataTransfer.getData('text');
		console.log(id);
		// circulo
		const draggableElement = document.getElementById(id);

		// zona donde soltar circulo
		const dropzone = event.target;

		console.log(draggableElement);
		console.log(dropzone);
		draggableElement?.setAttribute('theme', `${dropzone.id}`);
		dropzone?.appendChild(draggableElement);
		const idDrop = dropzone.id;
		const toggle: ToggleTheme = new ToggleTheme();
		toggle.changeTheme(parseInt(idDrop), false);
		event.dataTransfer.clearData();
	}

	public static onClick({ target }: any): void {
		const toggle: ToggleTheme = new ToggleTheme();
		const id = target.id | target.getAttribute('theme');
		if (id != toggle.browserTheme) {
			const circles = $$('#circle');
			circles.forEach((circle) => circle.remove());
			toggle.changeTheme(id);
		}
	}
}

export default Events;
