import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="" />
      </div>

      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
  
        <div className="res-container">
          <div className="res-item">
              <ResturantCard /> 
              <ResturantCard /> 
              <ResturantCard /> 
              <ResturantCard /> 
              <ResturantCard /> 
              <ResturantCard /> 
              <ResturantCard /> 
              <ResturantCard /> 
          </div>
        </div>
      </div>
    );
  };
  
  const ResturantCard = () => {
    return <div className="res-card">
      <div className="res-img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/978358a0d0caba4f4555b8e2147b467d" />
      </div>
  
      <div className="res-details">
        <h3>Pizza Hut</h3>
        <h4>Pizzas</h4>
        <h4>4.4 Star rating</h4>
        <h4>38 minutes</h4>
      </div>
    </div>;
  };


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
