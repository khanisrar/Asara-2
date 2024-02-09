import React from "react";
import "./BuyNow.css";
import { useParams } from "react-router-dom";
export default function BuyNow() {
  //   const params = useParams();
  //   const id = params.id;
  const { id } = useParams();
  const [product, setProduct] = React.useState(undefined);
  React.useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }, [id]);

  if (!product) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="fw-bold text-5xl"
      >
        Loading...
      </div>
    );
  }

  return (
    <>
      <UserBuy user={product} />
    </>
  );
}

function UserBuy({ user }) {
  const { id, title, price, description, image } = user;
  return (
    <div className="bigContainer">
      <div className="left">
        <img src={user.image} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h2>{user.category}</h2>
          <h1 className="my-2">{user.title}</h1>
          <h3>Price ${user.price}</h3>
          <h3>
            Rating <span>{user.rating.rate}</span>
            <i className="fa fa-star mx-1"></i>
          </h3>
          <p>{user.description}</p>
          <button className="btn btn-outline-dark">Add to cart</button>
          <button className="btn btn-outline-dark mx-4">Book Now</button>
        </div>
      </div>
    </div>
  );
}
