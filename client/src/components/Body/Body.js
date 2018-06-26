import React from "react";

const Body = () => (
    <form>
  <div className="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder="Password">
  </div>
  <div className="form-group form-check">
    <input type="checkbox" classNameclass="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
);

export default Body;