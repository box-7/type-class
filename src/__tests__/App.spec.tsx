import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// import { system } from "../theme"
// import { Provider } from "../components/ui/provider"

describe("title", () => {
        it("should render title", async () => {
                //     render(<App />);
                render(
                                <ChakraProvider value={defaultSystem}>
                                {/* <ChakraProvider value={system}> */}
                                        <App />
                                </ChakraProvider>
                        // </Provider>
                );
                await waitFor(() => screen.getByText("こんにちは"));
                expect(screen.getByText("Hello World")).toBeInTheDocument();
        });
});

// describe("title", () => {
//         it("should render title", async () => {
//                 //     render(<App />);
//                 render(
//                         // <ChakraProvider value={defaultSystem}>
//                         // <Provider>
//                                 {/* <ChakraProvider > */}
//                                 <ChakraProvider value={defaultSystem}>
//                                 {/* <ChakraProvider value={system}> */}
//                                         <App />
//                                 </ChakraProvider>
//                         // </Provider>
//                 );
//                 await waitFor(() => screen.getByText("こんにちは"));
//                 expect(screen.getByText("Hello World")).toBeInTheDocument();
//         });
// });