import ToggleTheme from "./ToggleTheme";

export default class App 
{
    
    static Start() : void 
    {
        const toggleTheme : ToggleTheme = new ToggleTheme();
        toggleTheme.StartTheme();
    }
}

