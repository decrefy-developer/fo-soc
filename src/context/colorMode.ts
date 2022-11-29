import React from 'react'

interface IcolorModeContext {
    toggleColorMode: () => void,
    mode?: "dark" | "light"
}

export const ColorModeContext = React.createContext<IcolorModeContext>({
    toggleColorMode: () => { },
    mode: 'dark'
})