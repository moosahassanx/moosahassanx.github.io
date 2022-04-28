import Link from 'next/link'
import Image from 'next/image'
import { Text, UseColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'
import { useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return(
        <NavLink to="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="ogo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                    >
                        Moosa Hassan
                    </Text>
                </LogoBox>
            </a>
        </NavLink>
    )
}

export default Logo;