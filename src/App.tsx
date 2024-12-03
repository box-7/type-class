// import { Button, Box, Table } from "@chakra-ui/react";

import { useEffect } from "react";
import { GetAllTodos } from "./lib/todo";

import { useState } from "react";
import { Todo } from "./domain/todo";
import { Table } from "@chakra-ui/react";

export default function App() {
        const [todos, setTodos] = useState<Todo[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(true);

        useEffect(() => {
                const getAllTodosMethod = async () => {
                        const todoData = await GetAllTodos();
                        // console.log(todoData);
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
                        {/* <h1>Hello World</h1> */}

                        <Table.Root size="sm">
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

                </>
        )
}
