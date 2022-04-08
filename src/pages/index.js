import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={'red'}
            >
                This website is still in development.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant={"page-title"}>
                        Moosa Hassan
                    </Heading>
                </Box>
                <p>Software engineering student graduating in 2022.</p>
            </Box>
        </Container>
    )
}

export default Page;