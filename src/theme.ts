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
                                blue: {
                                        50: { value: "#ebf8ff" },
                                        100: { value: "#bee3f8" },
                                        200: { value: "#90cdf4" },
                                        300: { value: "#63b3ed" },
                                        400: { value: "#4299e1" },
                                        500: { value: "#3182ce" },
                                        600: { value: "#2b6cb0" },
                                        700: { value: "#2c5282" },
                                        800: { value: "#2a4365" },
                                        900: { value: "#1a365d" },
                                },
                                red: {
                                        50: { value: "#fff5f5" },
                                        100: { value: "#fed7d7" },
                                        200: { value: "#feb2b2" },
                                        300: { value: "#fc8181" },
                                        400: { value: "#f56565" },
                                        500: { value: "#e53e3e" },
                                        600: { value: "#c53030" },
                                        700: { value: "#9b2c2c" },
                                        800: { value: "#822727" },
                                        900: { value: "#63171b" },
                                },
                        },
                },
        },
})

export const system = createSystem(defaultBaseConfig, customConfig)

