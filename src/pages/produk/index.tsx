import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import ProdukView from "../views/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
}

const kategori = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button onClick={fetchProducts}>Refresh Data</button>
      {products.map((product:ProductType) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;

// const Produk = () => {
//   const [isLogin] = useState(true); // ini diubah sementari yang sebelumnya false
//   const { push } = useRouter();

//   useEffect(() => {
//     if (!isLogin) {
//       push("/auth/login");
//     }
//   }, []);

//   return <ProdukView />;
// };

// export default Produk;