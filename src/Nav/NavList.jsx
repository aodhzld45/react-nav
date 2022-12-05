import styled from "styled-components";
import React from "react";

const List = styled.ul`
    display: ${(p) => (p.expanded ? "block" : "none")};
    margin: 0;
    padding: 0;
    padding-left: 20px;
    list-style: none;
`;

/*  
    네비게이션 리스트 Component 
    expanded prop는 시각적으로 리스트를 열어놓을지 닫아 놓을지 여부를 결정
*/
function NavList({children, expanded = true}) {
    return <List expanded={expanded}>{children}</List>;
}

export default NavList;