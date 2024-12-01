"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { system } from "../../theme"

export function Provider(props: { children: React.ReactNode }) {
        return (
                <ChakraProvider value={system}>
                        <ThemeProvider attribute="class" disableTransitionOnChange>
                                {props.children}
                        </ThemeProvider>
                </ChakraProvider>
        )
}


// import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
// import {
//   ColorModeProvider,
//   type ColorModeProviderProps,
// } from "./color-mode"

// export function Provider(props: ColorModeProviderProps) {
//   return (
//     <ChakraProvider value={defaultSystem}>
//       <ColorModeProvider {...props} />
//     </ChakraProvider>
//   )
// }
