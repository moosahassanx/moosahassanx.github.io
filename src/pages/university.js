import { Container, Box, Heading } from "@chakra-ui/react";

const University = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={'red'}
            >
                This will be the university page.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant={"page-title"}>
                        The university page
                    </Heading>
                    <p>This is a page about my university studies.</p>
                </Box>
            </Box>
        </Container>
    )
}

export default University;