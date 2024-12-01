// // カラーを定義
import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"
// import { createSystem, defineConfig } from "@chakra-ui/react"
const customConfig = defineConfig({
        theme: {
                tokens: {
                        colors: {
                                700: { value: "#ffcccc" },
                                brand: {
                                        50: { value: "#e6f2ff" },
                                },
                        },
                },
        },
})

export const system = createSystem(defaultBaseConfig, customConfig)
// export const system = createSystem(customConfig)


// import { extendTheme } from "@chakra-ui/react";

// const customTheme = extendTheme({
//   colors: {
//     700: "#ffcccc",
//     brand: {
//       50: "#e6f2ff",
//     },
//   },
// });

// export default customTheme;