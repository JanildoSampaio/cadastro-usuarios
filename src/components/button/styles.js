import styled from "styled-components";

export const Button = styled.button`
  border-radius: 1rem;
  border: ${(props) =>
    props.theme == "Primary" ? "none" : "0.0625rem solid #ffffff"};
  background: ${(props) =>
    props.theme == "Primary" ? "#fe7e5d" : "transparent"};
  width: 18.75rem;
  padding: 0.625rem;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme == 'Primary' ? '#000000;' : '#fe7e5d'};
  }

  &:active {
    opacity: 0.7;
  }
`;
