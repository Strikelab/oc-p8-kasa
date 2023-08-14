import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
export default function Home() {
  return (
    <main className="box-width">
      <Banner />
      <h1>WELCOME HOME</h1>
      <Link to="Un_lien_fou">Un lien qui ne mène nulle part</Link>
    </main>
  );
}
