import ToggleTheme from "./ToggleTheme";

class Events {
    // static toggle : ToggleTheme = new ToggleTheme()
    public static onDragStart(event: any) {
        // console.log(event);
        event
            .dataTransfer
            .setData('text/plain', event.target.id);
            
    }

    public static onDragOver(event : any) {
        event.preventDefault();
    }

    public static onDrop(event:any) {
        const id = event
            .dataTransfer
            .getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);
        const idDrop = dropzone.id;
        const toggle : ToggleTheme = new ToggleTheme()
        toggle.changeTheme(idDrop);
        // this.toggle.changeTheme(idDrop);
        event
            .dataTransfer
            .clearData();
    }
}

export default Events