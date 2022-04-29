import { Container, Box, Heading, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SpinnerCircularFixed } from "spinners-react";

const Page = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);

        // set timeout
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])
    
    return (
        <Container>
            {
                loading ? 
                <Box
                borderRadius="lg"
                mb={6}
                // how far from the top you want this loader to be
                mt="40%"
                >
                    <Center>
                        <SpinnerCircularFixed size={63} thickness={154} speed={180} color="rgba(172, 57, 59, 1)" secondaryColor="rgba(172, 57, 59, 0.04)" />
                    </Center>
                </Box>
                :
                <div>
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
                            <p>Software engineering student graduating in 2022.</p>
                        </Box>
                    </Box>
                </div>
            }
        </Container>
    )
}

export default Page;