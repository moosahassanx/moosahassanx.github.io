import { Container, Box, Heading } from "@chakra-ui/react";

const Works = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={'red'}
            >
                This will be the works page.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant={"page-title"}>
                        The works page
                    </Heading>
                    <p>This page will showcase my personal projects I've been doing.</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Works;