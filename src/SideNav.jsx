import Nav from "./Nav";

function isActive(path) {
    return window.location.pathname.startsWith(path);
}

function SideNav() {
    return (
        <Nav>
            <Nav.List>
                <Nav.Item>
                    <Nav.Link to="/" active={isActive("/")}>
                        메인 페이지입니다. path = /
                    </Nav.Link>
                </Nav.Item>

            <Nav.Separator />

                <Nav.Item>
                        <Nav.Link to="FRONT" active={isActive("/front")}>
                            front
                        </Nav.Link>
                </Nav.Item>







            </Nav.List>
        </Nav>
    )
}





export default SideNav;