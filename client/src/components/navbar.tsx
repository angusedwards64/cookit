import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import auth from '../utils/auth'
import api from '../services/apiServices'
import { useNavigate } from 'react-router-dom'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Nav(props) {
  let navigate = useNavigate()
  const handleClick = () => {
    removeToken()
    handleAuth()
  }

  const removeToken = () => {
    api.logout('accessToken', 'user')
  }

  const handleAuth = () => {
    props.setIsAuthenticated(false)
    props.setAuthenticatedUser('')
    auth.logout(() => navigate('/'))
  }
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to='/'>Cookit</Link>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {!props.isAuthenticated ? (
                <>
                  <Button as={'a'} fontSize={'sm'} fontWeight={400} href={'#'}>
                    <Link to='/signIn'>Sign In</Link>
                  </Button>
                  <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    href={'#'}
                    _hover={{
                      bg: 'pink.300',
                    }}
                  >
                    <Link to='/signUp'>Sign Up</Link>{' '}
                  </Button>
                </>
              ) : (
                <>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}
                    >
                      <Avatar
                        size={'sm'}
                        src={
                          'https://avatars.dicebear.com/api/male/username.svg'
                        }
                      />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                      <br />
                      <Center>
                        <Avatar
                          size={'2xl'}
                          src={
                            'https://avatars.dicebear.com/api/male/username.svg'
                          }
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>{props.user.username}</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>
                        <Link to='/recipe/post'>New Recipe</Link>
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem onClick={handleClick}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
