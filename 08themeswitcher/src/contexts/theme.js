
import { createContext,useContext } from 'react'


export const ThemeContext=createContext({
    // idhr context mei initial value bhi hm de skte hai,like jb context bne tb uske paas kya  kya value ho
    // default theme present so that whenever it is called ,n koi value present nhi rhi toh app crash kr jaayegi,therefor ye value di hmne
    // variable n method bhi pass kr skte hai
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme: ()=>{}

})

export const ThemeProvider=ThemeContext.Provider


//custom hook
export default function  useTheme(){
    //useTheme he ab import krne se hmey useContext ThemeContext sbka access de dega
    return useContext(ThemeContext)
}