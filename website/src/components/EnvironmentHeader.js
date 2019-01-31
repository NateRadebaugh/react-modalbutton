import React from "react";
import { Link } from "react-router-dom";
import { Block, Inline, Col } from "jsxstyle";
import { LIGHT_GRAY } from "../Theme";
import Logo from "./Logo";

const Branding = () => (
  <Col alignItems="center" padding="15px 0">
    <Logo size={36} shadow={false} />
    <Block
      marginTop="10px"
      flex="1"
      textTransform="uppercase"
      fontWeight="bold"
      fontSize="90%"
    >
      <Inline component={Link} props={{ to: "/" }} color={LIGHT_GRAY}>
        React ModalButton
      </Inline>
    </Block>
  </Col>
);

const EnvironmentHeader = () => (
  <Block>
    <Branding />
  </Block>
);

export default EnvironmentHeader;
