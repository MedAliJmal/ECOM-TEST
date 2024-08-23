import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entete from "./components/communComponents/Entete";
import AdminProductList from "./components/adminComponents/AdminProductList";
import AdminAddProduct from "./components/adminComponents/AdminAddProduct";
import { StaticProducts } from "./Data";
import ProductList from "./components/userComponents/ProductList";

function App() {
  //  USER STATES
  const [user, setUser] = useState({
    name: "Mohamed Ali Jmal",
    role: "User",
    imgUrl:
      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
  });
  //  PRODUCT STATE

  const [products, setProducts] = useState(StaticProducts);

  // --------------------------------------------

  //  SHOPPING CART STATE

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let finalPrices = document.querySelectorAll(".finalPrice");
  console.log(finalPrices);
  const sum = () => {
    let totalx = 0;
    for (let i = 0; i < finalPrices.length; i++) {
      totalx += Number(finalPrices[i].innerHTML);
    }
    setTotal(totalx);
  };

  const handleAddCart = (product) => {
    let verification = cart.find((el) => el.id === product.id);
    if (verification) {
      setCart(
        cart.map((el) =>
          el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    sum();
  };
  const handleIncQunatity = (clickedId) => {
    setCart(
      cart.map((el) =>
        el.id === clickedId ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
    sum();
  };

  const handleDecQunatity = (clickedId) => {
    setCart(
      cart.map((el) =>
        el.id === clickedId ? { ...el, quantity: el.quantity - 1 } : el
      )
    );
    sum();
  };
  // ------------------------------

  const handleRole = (selectedRole) => {
    setUser({ ...user, role: selectedRole });
  };

  return (
    <div className="App">
      <Entete
        handleIncQunatity={handleIncQunatity}
        handleDecQunatity={handleDecQunatity}
        cart={cart}
        handleRole={handleRole}
        user={user}
        total={total}
      />
      {/* Admin Section */}
      {user.role === "Admin" ? (
        <div>
          <AdminProductList products={products} />
          <AdminAddProduct />
        </div>
      ) : user.role === "User" ? (
        <div>
          <ProductList handleAddCart={handleAddCart} products={products} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
