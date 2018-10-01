import React from 'react';


const SearchBar = () =>
<div className="form-group">
<nav className="navbar navbar-expand-lg justify-content-between">
  <a className="navbar-brand"><span></span></a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</div>



export default SearchBar;
