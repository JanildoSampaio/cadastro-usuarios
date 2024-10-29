import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  height: 100vh;

  h1 {
    color: #fff;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 50rem;

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.5rem 0.5rem;
    text-align: left;
  }

  h3 {
    color: #000000;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
`;
export const AvatarUser = styled.img`
  height: 5rem;
`;
export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
