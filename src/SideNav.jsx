import Nav from "./Nav";
import imgfile from "./img/gaubiz_logo.png"


function isActive(path) {
    return window.location.pathname.startsWith(path);
}

function SideNav() {

    return (
        <Nav>
            <Nav.List>
                {/* Gaubiz logo 부분 */}
                <Nav.Item>
                    <Nav.Link to="/" active={isActive("/")}>
                        <img src={imgfile} width="150" alt="logo"></img>
                    </Nav.Link>
                </Nav.Item>

        <Nav.Item>
          <Nav.Link to="/login" active={isActive("/login")}>
            Login
          </Nav.Link>
        </Nav.Item>

      <Nav.Separator />

        <Nav.Item>
          <Nav.Link to="/front" active={isActive("/front")}>
            Front-end
          </Nav.Link>
          <Nav.List expanded={isActive("/front")}>
            <Nav.Item>
              <Nav.Link to="/front/html" active={isActive("/front/html")}>
                HTML
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/front/css" active={isActive("/front/css")}>
                CSS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>

              <Nav.Link to="/front/js/react" active={isActive("/front/js")}>
                JavaScript
              </Nav.Link>
              <Nav.List expanded={isActive("/front/js")}>

                <Nav.Item>
                  <Nav.Link
                    to="/front/js/angular"
                    active={isActive("/front/js/angular")}
                  >
                    Angular
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    to="/front/js/react"
                    active={isActive("/front/js/react")}
                  >
                    React
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    to="/front/js/vue"
                    active={isActive("/front/js/vue")}
                  >
                    Vue
                  </Nav.Link>
                </Nav.Item>

              </Nav.List>
            </Nav.Item>
          </Nav.List>
        </Nav.Item>              

        <Nav.Separator />

        <Nav.Item>
            <Nav.Link to="/back" active={isActive("/back")}>
            Back-End
            </Nav.Link>

                <Nav.List expanded={isActive("/back")}>
                    <Nav.Item>
                        <Nav.Link to="/back/java" active={isActive("/back/java")}>
                            Java
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link to="/back/python" active={isActive("/back/python")}>
                            Python
                        </Nav.Link>
                    </Nav.Item>

                </Nav.List>
        </Nav.Item>
        <Nav.Separator />

      

        <Nav.Separator />

    </Nav.List>
  </Nav>
  )
}

export default SideNav;