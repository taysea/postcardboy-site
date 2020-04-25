import React, { useContext, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Header,
  Heading,
  Layer,
  ResponsiveContext,
  Stack,
} from 'grommet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Cart, Close, Menu } from 'grommet-icons'
import { Footer } from '.'
import Div100vh from 'react-div-100vh'
import { getCart } from '../utils'

const StyledGatsbyLink = styled(Link)`
  font-family: Lato;
  color: #3e5170;
  font-weight: bold;
  text-decoration: none;
`
const MobileNavLink = styled(Link)`
  font-family: Lato;
  color: white;
  font-weight: bold;
  text-decoration: none;
`
const AnchorBox = ({ ...rest }) => <Box pad={{ vertical: 'small' }} {...rest} />

export default () => {
  const size = useContext(ResponsiveContext)
  const [showLayer, setShowLayer] = useState(false)
  const cartItems = getCart()

  return size !== 'small' ? (
    <Header
      justify="center"
      gap="large"
      pad={{ horizontal: 'medium', top: 'medium' }}
    >
      <StyledGatsbyLink to="/archive">archive</StyledGatsbyLink>
      <StyledGatsbyLink to="/theatre">theatre</StyledGatsbyLink>
      <StyledGatsbyLink to="/press">press</StyledGatsbyLink>
      <StyledGatsbyLink to="/">
        <Heading margin="none">postcard boy</Heading>
      </StyledGatsbyLink>

      <StyledGatsbyLink to="/contact">contact</StyledGatsbyLink>
      <StyledGatsbyLink to="/merch">merch</StyledGatsbyLink>
      <StyledGatsbyLink to="/cart">
        <Stack anchor="top-right">
          <Cart size="medium" color="blue!" />
          {cartItems.length ? (
            <Box background="orange" pad="xsmall" round />
          ) : (
            undefined
          )}
        </Stack>
      </StyledGatsbyLink>
    </Header>
  ) : !showLayer ? (
    <Header pad="medium">
      <StyledGatsbyLink to="/">
        <Heading margin="none">postcard boy</Heading>
      </StyledGatsbyLink>
      <Button
        icon={<Menu color="blue!" />}
        onClick={() => setShowLayer(true)}
      />
    </Header>
  ) : (
    <Layer full animation>
      <Div100vh>
        <Box fill background="blue!">
          <Header pad="medium">
            <MobileNavLink to="/">
              <Heading margin="none">postcard boy</Heading>
            </MobileNavLink>
            <Button icon={<Close />} onClick={() => setShowLayer(false)} />
          </Header>
          <Box
            pad={{ top: 'medium', horizontal: 'medium', bottom: 'xlarge' }}
            gap="large"
            flex
          >
            <MobileNavLink to="/archive">
              <AnchorBox>archive</AnchorBox>
            </MobileNavLink>
            <MobileNavLink to="/theatre">
              <AnchorBox>theatre</AnchorBox>
            </MobileNavLink>
            <MobileNavLink to="/press">
              <AnchorBox>press</AnchorBox>
            </MobileNavLink>
            <MobileNavLink to="/contact">
              <AnchorBox>contact</AnchorBox>
            </MobileNavLink>
          </Box>
          <Footer isLanding />
        </Box>
      </Div100vh>
    </Layer>
  )
}
