// import { Button, Box, Table } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { useEffect } from "react";
import { GetAllTodos } from "./lib/todo";
// import { RiArrowRightLine, RiMailLine } from "react-icons/ri"
// import { chakra } from "@chakra-ui/react"
// import { VStack } from '@chakra-ui/react';

import { useState } from "react";
import { Todo } from "./domain/todo";

export default function App() {
        const [todos, setTodos] = useState<Todo[]>([]);

        useEffect(() => {
                const getAllTodosMethod = async () => {
                        const todoData = await GetAllTodos();
                        // console.log(todoData);
                        setTodos(todoData);
                }

                getAllTodosMethod();
        }
        , []);

        return (
                <>
                        <h1>Hello World</h1>
                        {/* <ul> */}
                                {/* {todos.map((todo) => (
                                        <li key={todo.id}><Box>{todo.title}</Box></li>
                                ))} */}

                                {/* <Table.Root size="sm">
                                <Table.Header>
                                        <Table.Row>
                                        <Table.ColumnHeader>Title</Table.ColumnHeader>
                                        <Table.ColumnHeader>done</Table.ColumnHeader>
                                        <Table.ColumnHeader textAlign="end">CreatedAt</Table.ColumnHeader>
                                        </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                        {todos.map((item) => (
                                                <Table.Row key={item.id}>
                                                <Table.Cell>{item.title}</Table.Cell>
                                                <Table.Cell>{item.done ? "TRUE" : "FALSE"}</Table.Cell>
                                                <Table.Cell textAlign="end">{item.created_at}</Table.Cell>
                                        </Table.Row>
                                        ))}
                                </Table.Body>
                                </Table.Root>
                        </ul> */}
                        {/* <VStack>
                                <Button bg="red.300/40" >Button</Button>
                                <Button  bgColor="red.200" >Button</Button>

                                <Button colorPalette="teal" variant="solid" >
                                        <RiMailLine /> Email
                                </Button>

                                <Button colorPalette="red" variant="outline">
                                        Call us <RiArrowRightLine />
                                </Button>

                                <chakra.button
                                        // borderWidth="1px"
                                        // colorPalette="red"
                                        // borderColor="colorPalette.500"
                                        bgColor="red.200"
                                        _hover={{
                                                borderColor: "colorPalette.100",
                                                backgroundColor: "red.800",
                                        }}
                                >
                                        Click me
                                </chakra.button>
                        </VStack> */}
                </>
        )
}
