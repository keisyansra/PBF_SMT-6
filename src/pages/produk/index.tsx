import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProdukView from "../views/produk";

const Produk = () => {
  const [isLogin] = useState(true); // ini diubah sementari yang sebelumnya false
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return <ProdukView />;
};

export default Produk;