import Theme from "./Theme";

export default class App 
{
    static isTheme : Theme = new Theme(); 
    static Start() : void 
    {
        console.log("Start App");
    }
}

