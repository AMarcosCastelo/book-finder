import styled from 'styled-components';

export const CardItem = styled.a`
  transition-delay: 0.1s;
	border-radius: 4px;
	transform: translate(0, 0);
  text-decoration: none;
	will-change: transform, box-shadow;
	background-color: ${props => props.theme.colors.primary};
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
	transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  width: 300px;
  margin: 20px;
  &:hover {
		transform: translate(0, -10px);
    cursor: pointer;
	}
`;

export const Thumbnail = styled.img`
  /* background-image: url('${props => props.itemRef}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: transparent;
  position: relative; */
  height: 350px;
`;

export const Content = styled.div`
  position: relative;
  padding: 20px 25px 20px 25px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    margin-top: 5px;
    margin-bottom: 5px;
  }
  p {
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    position: relative;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .author {
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    text-align: left;
    transition: color 0.35s;
  }
  /* .author {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -20px;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px;
  } */
`;
