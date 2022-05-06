import { 
    Container, 
    Box, 
    Link, 
    Stack, 
    Heading, 
    Flex, 
    Menu, 
    MenuItem,
    MenuList,
    MenuButton, 
    IconButton, 
    useColorModeValue, 
    Center,
    color
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import NextLink from 'next/link'
import pdfFile from '../resume.pdf'
import { HiAcademicCap, HiCode, HiOutlineSortDescending, HiOutlineArchive } from "react-icons/hi";
import ThemeToggleButton from './theme-toggle-button'
import { GoMarkGithub } from "react-icons/go";

const Navbar = props => {

    return (
        <Box 
        as='nav' w='100%' 
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container display='flex' p={2} maxW='container.md' wrap='wrap' align='center' justify='space-between'>
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                {/* desktop viewing */}
                <Stack 
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems='center'
                flexGrow={1}
                mt={{base: 4, nmd: 0}}
                {...props}
                >
                    <Link p={2}>
                        <Flex>
                            <Center p={1}>
                                <HiOutlineArchive />
                            </Center>
                            <Center>
                                <NavLink to='/works'>Works</NavLink>
                            </Center>
                        </Flex>
                    </Link>
                    <Link p={2}>
                        <Flex>
                            <Center p={1}>
                                <HiAcademicCap/> 
                            </Center>
                            <Center>
                                <NavLink to='/uni'>University</NavLink>
                            </Center>
                        </Flex>
                    </Link>
                    <Link p={2} href='https://github.com/moosahassanx/moosahassanx.github.io/tree/master' target="_blank">
                        <Flex>
                            <Center p={1}>
                                <GoMarkGithub />
                            </Center>
                            <Center>
                                Source Code
                            </Center>
                        </Flex>
                    </Link>
                    <Link p={2} href={pdfFile} target="_blank">
                        <Flex>
                            <Center p={1}>
                                <HiOutlineSortDescending />
                            </Center>
                            <Center>
                                Resume
                            </Center>
                        </Flex>
                    </Link>
                </Stack>

                {/* mobile responsive */}
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='Options' />

                            <MenuList>
                                <NavLink to='/'><MenuItem>Home</MenuItem></NavLink>
                                <NavLink to='/works'><MenuItem>Works</MenuItem></NavLink>
                                <NavLink to='/uni'><MenuItem>University Studies</MenuItem></NavLink>
                                <Link href='https://github.com/moosahassanx/moosahassanx.github.io/tree/master' target="_blank"><MenuItem>View Source Code</MenuItem></Link>
                                <Link href={pdfFile} target="_blank"><MenuItem>Download Resume</MenuItem></Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>        
    )
}

export default Navbar