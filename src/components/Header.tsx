import React from "react";
import styled from "styled-components";

import Link from "./Link";
import { Link as RLink } from "@reach/router";
import { c } from "../styles/colors";
import { Tit } from ".";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({ title }) => (
  <Box>
    <RLink to="/">
      <Logo>nfrid.me</Logo>
    </RLink>
    <Nav>
      <Tit>{title}</Tit>
    </Nav>
    <Nav>
      <Link nested to="/about">
        About
      </Link>
      <Link nested to="/dev">
        Dev
      </Link>
      <Link nested to="/blog">
        Blog
      </Link>
    </Nav>
  </Box>
);

export default Header;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${c.bgd};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.h1`
  color: ${c.greenish};
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Nav = styled.div`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
