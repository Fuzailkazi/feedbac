import React from "react";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
function Posts() {
  const status = 200;
  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };
  const navigate = useNavigate();
  if (status === 404) {
    return <Navigate to='/notfound' />;
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>hello world</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Posts;
