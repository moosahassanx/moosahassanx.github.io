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
    useColorModeValue 
} from '@chakra-ui/react'
import { 
    HashRouter,
    NavLink,
    Routes,
    Route
} from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import NextLink from 'next/link'
import Page from '../pages'
import University from '../pages/university'
import Works from '../pages/projects'

const LinkItem = ({path, children}) => {
    const inactiveColor = useColorModeValue('gray200', 'whiteAlp.900')

    return (
        // <a p={2} bg={'#202023'} color='#202023'>{children}</a>
        <NextLink>
            <Link p={2} bg={'glassTeal'} color={'#202023'}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <HashRouter>
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
                    >
                        <Link p={2} bg={'glassTeal'} color={'#202023'}><NavLink to='/works'>Works</NavLink></Link>
                        <Link p={2} bg={'glassTeal'} color={'#202023'}><NavLink to='/uni'>University</NavLink></Link>
                        <Link p={2} bg={'glassTeal'} color={'#202023'} href='https://github.com/moosahassanx/moosahassanx.github.io/tree/master' target="_blank">Source Code</Link>
                    </Stack>

                    {/* mobile responsive */}
                    <Box flex={1} align='right'>
                        <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                            <Menu>
                                <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='Options' />

                                <MenuList>
                                    <MenuItem><NavLink to='/'>Home</NavLink></MenuItem>
                                    <MenuItem><NavLink to='/works'>Works</NavLink></MenuItem>
                                    <MenuItem><Link href='https://github.com/moosahassanx/moosahassanx.github.io/tree/master' target="_blank">Source Code</Link></MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Page/>} />
                    <Route exact path="/works" element={<Works/>} />
                    <Route path="/uni" element={<University/>} />
                </Routes>
            </div>
            </HashRouter>
        
        
    )
}

export default Navbar