import React, { useEffect } from "react";
import "../App.css";
// import men from "./images/men.jpg";
// import women from "./images/women.jpg";
import { Link } from "react-router-dom";

export default function Products() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentCategory, setCurrentCategory] = React.useState("All");
  const [data, setData] = React.useState([]);
  const getUser = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setIsLoading(true);
    getUser();
    setIsLoading(false);
  }, []);

  const filterItem = (category) => {
    if (category === "All") {
      return data;
    }

    const updatedList = data.filter((curlEle) => {
      return curlEle.category === category;
    });
    return updatedList;
  };

  const getUniqueCategory = (data) => {
    const category = data.map((ele) => {
      return ele.category;
    });
    const uniqueCategory = [...new Set(category)];
    return uniqueCategory;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-center">
        <div className="row">
          <h1 className="text-center">FEATURED PRODUCT</h1>
          <div className=" d-flex justify-content-center">
            <div className="row">
              {["All", ...getUniqueCategory(data)].map((category, i) => {
                return (
                  <div className="col-lg-2  col-sm-12" key={i}>
                    <button
                      id="btn"
                      className="btn btn-outline-dark m-2"
                      onClick={() => setCurrentCategory(category)}
                    >
                      {category}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          {filterItem(currentCategory).map((user, i) => (
            <UserCard user={user} key={i} />
          ))}
        </div>
      </div>
      <div className="container mt-4 d-flex">
        <div className="card m-2 text-white">
          {/* <img src={women} className="card-img" alt="Background Image" /> */}
          <div className="card-img-overlay">
            <h5 className="card-title apparel">
              WOMEN <br /> APPAREL
            </h5>
          </div>
        </div>
        <div className="card m-2 text-white">
          {/* <img src={men} className="card-img" alt="Background Image" /> */}
          <div className="card-img-overlay">
            <h5 className="card-title apparel">
              MEN <br /> APPAREL
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

function UserCard({ user }) {
  const { id, title, price, description, image } = user;
  return (
    <div className="col-md-4 my-4">
      <div
        className="card h-100 text-center p-4 mx-auto"
        style={{ width: "18rem" }}
      >
        <img
          src={user.image}
          className="card-img-top"
          alt="..."
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title  mb-0">
            {user.title.substring(0, 12)}....
          </h5>
          <p className="fs-5 fw-bold my-2">${user.price}</p>
          <p className="fs-5  my-2">
            Rating {user.rating.rate}
            <i className="fa fa-star mx-1"></i>
          </p>
          {/* <a href="#" className="btn btn-outline-dark mt-2" id="buyNow">
            Buy Now
          </a> */}

          <Link to={`/product/${id}`}>
            <button className="btn btn-outline-dark mt-2" id="buyNow">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return <div className="loading"> Loading </div>;
}
