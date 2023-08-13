import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="box-width">
      <h1>WELCOME HOME</h1>
      <Link to="Un lien fou">Un lien qui ne mène nulle part</Link>
    </main>
  );
}
