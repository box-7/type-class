
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "./components/ui/provider"
import { ChakraProvider } from "@chakra-ui/react"

// cssを定義したsystemをimport
import { system } from "./theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
                <Provider>
                        {/* cssを定義したsystemをvalueにして、ChakraProviderを設定 */}
                        <ChakraProvider value={system}>
                                <App />
                        </ChakraProvider>
                </Provider>
        </React.StrictMode>,
)



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "@/components/ui/provider";
// import { ChakraProvider } from "@chakra-ui/react";
// import customTheme from "@/theme";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Provider>
//       <ChakraProvider theme={customTheme}>
//         <App />
//       </ChakraProvider>
//     </Provider>
//   </React.StrictMode>,
// );




// system.css({
//         color: "red.200",
//         bg: "blue.200",
//       })


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
