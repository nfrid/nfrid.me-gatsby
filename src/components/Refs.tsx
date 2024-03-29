import React from "react";
import styled from "styled-components";
import { c } from "../styles/colors";

interface IProps {
  title: string;
  refs: {
    href: string;
    text: string;
  }[];
}

const Refs: React.FC<IProps> = ({ title, refs }) => (
  <RefBox>
    <RefTit>{title}</RefTit>
    {refs.map((ref, i) => (
      <Ref key={i} href={ref.href}>
        {ref.text}
        <br />
      </Ref>
    ))}
  </RefBox>
);

export default Refs;

const RefBox = styled.div`
  margin: 5em 0;
  text-align: right;
`;

const RefTit = styled.h2`
  color: ${c.redish};
  font-size: 1.3em;
`;

const Ref = styled.a.attrs({
  target: "_blank",
})`
  padding: 0.5em 0 0.5em 1em;
  font-size: 0.9em;
`;
