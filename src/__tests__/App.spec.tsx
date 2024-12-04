import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// import { system } from "../theme"
// import { Provider } from "../components/ui/provider"
import { Todo } from "../domain/todo";

const mockGetAllTodos = jest
        .fn()
        .mockResolvedValue([
                new Todo("1", "title1", false, "2021-09-01T00:00:00Z"),
                new Todo("2", "title2", true, "2021-09-02T00:00:00Z"),
                new Todo("3", "title3", false, "2021-09-03T00:00:00Z"),
                new Todo("4", "title4", true, "2021-09-04T00:00:00Z"),
        ])



jest.mock("../lib/todo.ts", () => {
        return {
                GetAllTodos: () => mockGetAllTodos(),
        }
});


describe("title", () => {
        test("should render title", async () => {
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

        test("should render todos", async () => {
                render(
                        <ChakraProvider value={defaultSystem}>
                                <App />
                        </ChakraProvider>
                );
                await waitFor(() => screen.getByText("こんにちは"));
                const todos = screen.getByTestId("table").querySelectorAll("tr");
                await waitFor(() => screen.getByText("こんにちは"));
                console.log("todos", todos);
                expect(todos.length -1).toBe(4);
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