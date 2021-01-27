import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
        return theme.colors.mainBg;
    }};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mainBg};
  
  * {
    margin: 0;
  }

`;


Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  
  p {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 30px;
  }
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

`;

Widget.Link = styled.a`
  width: 100%;
  max-width: 350px;
  height: 30px;
  display: flex;
  text-decoration: none;
  margin-top: 15px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding:6px 10px;  
  color: #fff;
  transition: 300ms;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;


Widget.Button = styled.button`
  width: 100%;
  max-width: 350px;
  height: 30px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  font-size: 15px;
  padding:5px;
  margin-bottom: 25px;
  color: #fff;

`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;