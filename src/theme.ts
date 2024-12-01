// // カラーを定義
import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"
const customConfig = defineConfig({
        theme: {
                tokens: {
                        colors: {
                                teal: {
                                        50: { value: "#f0fdfa" },
                                        100: { value: "#ccfbf1" },
                                        200: { value: "#99f6e4" },
                                        300: { value: "#5eead4" },
                                        400: { value: "#2dd4bf" },
                                        500: { value: "#14b8a6" },
                                        600: { value: "#0d9488" },
                                        700: { value: "#0f766e" },
                                        800: { value: "#115e59" },
                                        900: { value: "#134e4a" },
                                },
                        },
                },
        },
})

export const system = createSystem(defaultBaseConfig, customConfig)

