import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/product";  
import useSWR from "swr";
import fetcher from "../utils/db/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  const products = data?.data || [];

  return (
    <div>
      <TampilanProduk products={products} isLoading={isLoading} />
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