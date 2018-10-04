import React from 'react';
import SignOutButton from './SignOut';
import './dropdown.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"orange",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

          { this.state.displayMenu ? (
          <ul className="ulo">
         <li className="lio"><a className="active" href="#Create Page">Create Page</a></li>
         <li className="lio"><a href="#Manage Pages">Manage Pages</a></li>
         <li className="lio"><a href="#Create Ads">Create Ads</a></li>
         <li className="lio"><a href="#Manage Ads">Manage Ads</a></li>
         <li className="lio"><a href="#Activity Logs">Activity Logs</a></li>
         <li className="lio"><a href="#Setting">Setting</a></li>
         <li className="lio"><SignOutButton/></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;
