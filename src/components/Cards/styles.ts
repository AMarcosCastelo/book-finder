import styled from 'styled-components';

export const CardItem = styled.a`
  display: flex;
  flex-direction: row;
  width: 400px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.textLight};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.55);
  &:hover {
    transform: translateX(1%);
    /* box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2); */
  }
  img {
    max-height: 120px;
    max-width: 100px;
  }
`;

export const Content = styled.div`
  padding: 10px;

  h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    margin: 10px 0 10px 0;
  }

  p {
    margin-top: 10px;
  }
`;