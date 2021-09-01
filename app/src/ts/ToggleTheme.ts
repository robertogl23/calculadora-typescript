import Events from "./Events";

export enum THEMES {
    THEME_1 = 1,
    THEME_2 = 2,
    THEME_3 = 3,
}
class ToggleTheme {
    private defaultTheme : THEMES = THEMES.THEME_1;
    public readonly keyLS : string = "theme-calc";
    public browserTheme : THEMES = parseInt(localStorage.getItem(this.keyLS)!) || this.defaultTheme;


    public getThemeValidated(theme : THEMES) : THEMES 
    {
        if( theme <= 3 && theme > 0) return theme;

        return this.defaultTheme;
    }

    public changeTheme( theme : THEMES ) : void 
    {
        const validateTheme = this.getThemeValidated(theme)
        localStorage.setItem(this.keyLS,JSON.stringify(validateTheme));
        
    }
    public StartTheme() : void {
        this.changeTheme(this.browserTheme)
        this.setTheme(this.getThemeValidated(this.browserTheme)); 
        this.StartEvents()
    }
    public StartEvents() : void {
        const listDrag = document.getElementsByName("drag");
        const dragElement = document.getElementById("circle");
        
        dragElement?.addEventListener('dragstart',Events.onDragStart)
        listDrag.forEach(drag => {
            // console.log(drag);
            drag.addEventListener('drop',Events.onDrop);
            drag.addEventListener('dragover',Events.onDragOver);
            drag.addEventListener('click',() =>console.log('object'));
        })
    }

    public CircleDraggable() : HTMLSpanElement{
        const circle = document.createElement('span')
        circle.classList.add('circle','container');
        circle.setAttribute("draggable","true");
        circle.id = "circle";
        return circle;
    }
    public setTheme( theme : THEMES ) : void {
        document.getElementById(theme.toString())?.appendChild(this.CircleDraggable());
        
    }
    
}
export default  ToggleTheme;