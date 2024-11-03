import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
