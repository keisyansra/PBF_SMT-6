// Next.js API route support: https://next.js.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { 
    retrieveProducts, 
    retrieveByID,

} from "../../../utils/db/servicefirebase";

type Data = {
    status: boolean;
    status_code: number;
    data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { produk } = req.query;

  if (produk && Array.isArray(produk) && produk.length > 1) {
    const id = produk[1]; 

    const data = await retrieveByID("products", id);

    console.log("RESULT DETAIL:", data);

    res.status(200).json({
      status: true,
      status_code: 200,
      data,
    });
    return;
  }
  
  const data = await retrieveProducts("products");

  console.log("RESULT LIST:", data);

  res.status(200).json({
    status: true,
    status_code: 200,
    data,
  });
}

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>,
// ) {

//     const id = req.query.produk;
    
//     if (id && typeof id === "string") {
//         const data = await retrieveByID("products", id);

//         console.log("RESULT:", data);

//         res.status(200).json({ 
//             status: true, 
//             status_code: 200, 
//             data
//         });
//         return;
//     } else {
//         const data = await retrieveProducts("products");
//         res.status(200).json({ 
//             status: true, 
//             status_code: 200, 
//             data
//         });
//     }
// }