import styled from "styled-components";

interface ICityButton {
  isActive: boolean;
}

export const CityButtonComponent = styled.button<ICityButton>`
  background: ${(props) => (props.isActive ? "#83eaf1" : "#63a4ff")};
  border: 1px solid transparent;
  border-radius: 8px;
  transition: opacity 0.2s ease-in-out;

  width: 100%;
  padding: 1rem 1.5rem;

  &:hover {
    opacity: 0.8;
  }
`;
