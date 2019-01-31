import React from "react";
import { Link } from "react-router-dom";
import { Block, Row, Inline } from "jsxstyle";
import { SMALL_SCREEN, LIGHT_GRAY } from "../../Theme";
import Logo from "../Logo";
import SmallScreen from "../SmallScreen";

const Button = ({ to, small, ...props }) => (
  <Block
    component={Link}
    activeBoxShadow="2px 2px 4px rgba(0,0,0,.25)"
    activeTop="5px"
    background="white"
    borderRadius="100px"
    boxShadow={
      small ? "0 5px 15px rgba(0, 0, 0, .25)" : "0 10px 30px rgba(0, 0, 0, .25)"
    }
    cursor="pointer"
    flex="1"
    fontSize="10px"
    fontWeight="bold"
    hoverBoxShadow={
      small ? "0 5px 10px rgba(0, 0, 0, .25)" : "0 10px 25px rgba(0, 0, 0, .25)"
    }
    hoverTop="1px"
    marginRight={small ? "10px" : "20px"}
    padding={small ? "10px" : "15px 25px"}
    position="relative"
    props={{ to }}
    textAlign="center"
    textTransform="uppercase"
    top="0"
    userSelect="none"
    whiteSpace="nowrap"
    {...props}
  />
);

const NavBar = () => (
  <Row textTransform="uppercase" fontWeight="bold" width="100%">
    <Block flex="1" fontSize="14px">
      <Inline component="span" color={LIGHT_GRAY}>
        React ModalButton
      </Inline>
    </Block>
  </Row>
);

const Banner = () => (
  <SmallScreen>
    {isSmallScreen => (
      <Row width="100%">
        {!isSmallScreen && (
          <Block flex="1">
            <Logo />
          </Block>
        )}
        <Block flex="1">
          <Block lineHeight="1">
            <Block
              component="h2"
              textTransform="uppercase"
              fontSize={isSmallScreen ? "200%" : "350%"}
              fontWeight="bold"
            >
              React ModalButton
            </Block>
          </Block>

          <Block
            margin={`${isSmallScreen ? 20 : 20}px 0`}
            fontSize={isSmallScreen ? "80%" : null}
          >
            React ModalButton a wrapper <b>React Component</b> that manages the
            state and wrapper UI for button/modal functionality.
          </Block>

          <Row>
            <Button to="/docs" small={isSmallScreen}>
              Docs
            </Button>
          </Row>
        </Block>
      </Row>
    )}
  </SmallScreen>
);

const Header = () => (
  <SmallScreen query={SMALL_SCREEN}>
    {isSmallScreen => (
      <Block background="linear-gradient(125deg, #fff, #f3f3f3 41%, #ededed 0, #fff)">
        <Block padding="20px" maxWidth="1000px" margin="auto">
          {!isSmallScreen && <NavBar />}
          <Block height={isSmallScreen ? "20px" : "40px"} />
          <Banner />
          <Block height="20px" />
        </Block>
      </Block>
    )}
  </SmallScreen>
);

export default Header;
