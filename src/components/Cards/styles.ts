import styled from 'styled-components';

export const CardItem = styled.article`
  transition-delay: 0.1s;
	border-radius: 4px;
	transform: translate(0, 0);
	will-change: transform, box-shadow;
	background-color: ${props => props.theme.colors.primary};
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
	transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  width: 300px;
  margin-right: 30px;
  margin-bottom: 30px;
  &:hover {
		box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,
			rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,
			rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,
			rgba(35, 35, 35, 0.05) 0px 64px 64px;
		transform: translate(0, -4px);
    cursor: pointer;
	}
`;

export const Thumbnail = styled.div`
  background-image: url('https://picsum.photos/200/450/?random');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: transparent;
  position: relative;
  height: 350px;
`;

export const Content = styled.div`
  position: relative;
  padding: 20px 25px 20px 25px;
  h4 {
    font-size: 18x;
    font-weight: normal;
    color: ${props => props.theme.colors.text};
    margin-top: 5px;
    margin-bottom: 5px;
  }
  p {
    color: ${props => props.theme.colors.text};
    font-size: 12px;
    position: relative;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .ago {
    color: rgba(179, 192, 200, 1);
    font-size: 12px;
    text-align: left;
    transition: color 0.35s;
  }
  .author {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -20px;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px;
  }
`;
