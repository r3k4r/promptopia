'use client'

import { useThemeContext } from "@/ThemeProvider"

export default function Background(){
    const { theme } = useThemeContext();

    return(
        <div className={`${theme === 'dark' ? 'smooth_content' : 'main'}`}>
          <div className='gradient' />
        </div>
    )
}