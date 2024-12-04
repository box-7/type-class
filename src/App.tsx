// import { Button, Box, Table } from "@chakra-ui/react";

import { useEffect } from "react";
import { GetAllTodos } from "./lib/todo";

import { useState } from "react";
import { Todo } from "./domain/todo";
import { Table, VStack, Button   } from "@chakra-ui/react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"
import { chakra } from "@chakra-ui/react"
// import { VStack } from '@chakra-ui/react';

export default function App() {
        const [todos, setTodos] = useState<Todo[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(true);

        useEffect(() => {
                const getAllTodosMethod = async () => {
                        const todoData = await GetAllTodos();
                        console.log(todoData);
                        setTodos(todoData);
                        setIsLoading(false);
                }

                getAllTodosMethod();
        }
        , []);

        if (isLoading) {
                return <h1>Loading...</h1>
        }

        return (
                <>
                        <p>こんにちは</p>
                        <h1>Hello World</h1>

                        <Table.Root size="sm" data-testid="table">
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

                        <VStack>
                                <Button bg="red.300/40" >Button</Button>
                                <Button  bgColor="red.200" >Button</Button>

                                <Button colorPalette="teal" variant="solid" >
                                        <RiMailLine /> Email
                                </Button>

                                <Button colorPalette="red" variant="outline">
                                        Call us <RiArrowRightLine />
                                </Button>

                                <chakra.button
                                        borderWidth="1px"
                                        colorPalette="blue"
                                        borderColor="colorPalette.500"
                                        bgColor="red.200"
                                        padding="4px 8px"
                                        fontSize="16px"
                                        borderRadius="xl"
                                        _hover={{
                                                borderColor: "gray.400",
                                                backgroundColor: "red.800",
                                        }}
                                >
                                        Click me
                                </chakra.button>

                                <chakra.button
                                        // borderWidth="1px"
                                        // colorPalette="blue"
                                        // borderColor="colorPalette.500"
                                        // bgColor="red.200"
                                        padding="4px 8px"
                                        fontSize="16px"
                                        borderRadius="xl"
                                        _hover={{
                                                borderColor: "gray.400",
                                                backgroundColor: "red.800",
                                        }}
                                >
                                        Click me
                                </chakra.button>
                        </VStack>

                </>
        )
}
