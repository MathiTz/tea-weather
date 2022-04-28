import styled from "styled-components";

export const Container = styled.div`
  max-width: 1320px;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const WeatherHeader = styled.header`
  text-align: center;
`;

export const TitleDay = styled.h2`
  padding: 0.5rem 0;
`;

export const WeatherIcon = styled.div`
  img {
    width: 50px;
  }
`;

export const WeatherBody = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    li {
      width: 50%;
      padding: 0.5rem 0;
      margin: 0 auto;
    }
  }
`;

export const Temperature = styled.h3`
  text-align: center;
`;

export const CardContent = styled.section`
  padding: 0.5rem 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  > div {
    background-color: #a2a3d4;
    border: 1px solid #000;
  }
`;
