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

Widget.Input = styled.input`
  width: 281px;
  height: 40px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 15px;
  padding:5px;
  margin-bottom: 35px;
  color: #fff;
  transition: 300ms;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

Widget.ButtonLink = styled.a`
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin: auto;
  padding:10px 108px;
  color: #fff;
  font-weight: bold;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

Widget.Link = styled.a`
  width: 281px;
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

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

export default Widget;