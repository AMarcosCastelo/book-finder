import styled from 'styled-components';
import blackLupa from '../../img/blackLupa.svg';
import whiteLupa from '../../img/whiteLupa.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:20px;
`;

export const SearchContainer = styled.div`
  padding-top: 54px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 24px;
  margin-top: 20px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.text};
  background-color: transparent;
  background-image: url(${props => props.theme.title === 'light' ? blackLupa : whiteLupa});
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.inputBorder};
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  
  &::placeholder {
    color: color(${props => props.theme.colors.text} a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  
  &:hover,
  &:focus {
    padding: 12px 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    border-radius: 0;
    background-position: 100% center;
  }
`;
