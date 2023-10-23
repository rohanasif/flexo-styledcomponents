import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
export const Li = styled.li`
  display: flex;
  padding: 20px;
  font-weight: bold;
`;
export const Btn = styled.button`
  padding: ${(props) => props.btnPadding};
  border: none;
  background: blue;
  color: white;
  cursor: pointer;
`;
export const TopDiv = styled.div`
  display: flex;
`;
