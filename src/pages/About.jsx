import { Link } from "react-router-dom";

import Card from "../components/shared/Card";

export default function About() {
  return (
    <Card>
      <h2>About this project</h2>
      <p>This is a React App to leave feedback for a product and services </p>
      <p>Version: 1.0.0</p>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}
