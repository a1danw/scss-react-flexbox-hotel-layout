import React from "react";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import Gallery from "./ui/Gallery";
import HotelOverview from "./ui/HotelOverview";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="hotel-view">
          <Gallery />
          <HotelOverview />
        </main>
      </div>
    </div>
  );
}

export default App;
