enum THEMES {
    THEME_1 = 1,
    THEME_2 = 2,
    THEME_3 = 3,
}
class Theme {
    private defaultTheme : THEMES = THEMES.THEME_1;
    private readonly keyLS : string = "theme-calc";
    private browserTheme : THEMES = parseInt(localStorage.getItem(this.keyLS)!) || this.defaultTheme;
    constructor() {
        this.changeTheme(this.getTheme());
    }

    public getTheme() : THEMES 
    {
        if( this.browserTheme <= 3 ) return this.browserTheme;

        return this.defaultTheme;
    }

    public changeTheme( theme : THEMES ) : void 
    {
       localStorage.setItem(this.keyLS,JSON.stringify(theme)); 
    }

}

export default Theme;