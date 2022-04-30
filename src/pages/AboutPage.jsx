import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>this is a react app to leave a feedback for a product</p>
        <p>Version 1.0.0</p>
        <Link to='/'>Waps ghar ja</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
