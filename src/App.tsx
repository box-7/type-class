import { Box, Button } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"

export default function App() {
        return (
                <>
                        <Box bg="700" >
                                aaa
                        </Box>
                        <Button bg="700" >Button</Button>

                        <Card.Root width="320px">
                                <Card.Body gap="2">
                                        <Avatar
                                                src="https://picsum.photos/200/300"
                                                name="Nue Camp"
                                                size="lg"
                                                shape="rounded"
                                        />
                                        <Card.Title mt="2">Nue Camp</Card.Title>
                                        <Card.Description bg="700" >
                                                This is the card body. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                                                Curabitur nec odio vel dui euismod fermentum.
                                        </Card.Description>
                                </Card.Body>
                                <Card.Footer justifyContent="flex-end">
                                        <Button variant="outline">View</Button>
                                        <Button>Join</Button>
                                </Card.Footer>
                        </Card.Root>

                </>

        )
}


// import { Button } from "@chakra-ui/react";

// export default function App() {
//   return (
//     <>
//       <Button colorScheme="brand">Button</Button>
//     </>
//   );
// }

// import { Button } from "@chakra-ui/react"
// // import { Button } from "@chakra-ui/react"

// export default function App() {
//         // console.log(props);
//         return (
//                 <>
//                         <Button>Button</Button>
//                         <Button colorScheme="brand">Button</Button>
//                 </>
//         )
// }



