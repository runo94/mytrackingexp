import React, {Component, Fragment} from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark col-12">
              <span className="navbar-brand">My Sport Tracker</span>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
