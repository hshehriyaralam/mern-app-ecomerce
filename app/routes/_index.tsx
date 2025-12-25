import HomePage from "~/components/home";
import type { Route } from "./+types/_index";
// import { useLoaderData, Form, } from "react-router";
// import { getDB } from "db.server";



// export async function action(){
//   const db = await getDB();
//   const collection = db.collection("testProducts");
//   await collection.insertOne({
//     name: "Test Product",
//     price: 100,
//     createdAt: new Date(),
//   });
//   return null;
// }

// export async function loader() {
//   const db = await getDB();
//   const collection = db.collection("testProducts");
//   const products = await collection.find().toArray();

//   return { products};
// }


export function meta({}: Route.MetaArgs) {
  return [
    { title: "StyleSphere" },
    { name: "description", content: "Elevate Your Style with StyleSphere" },
  ];
}

export default function Home() {
  // const data = useLoaderData<typeof loader>();
 
  return (
    <div>
      {/* <h2>Test Collection Data</h2>
      {data.products.map((item : any, index: number) => (
        <div  key={index}>
          <p>Name : {item.name}</p>
          <p>Price : {item.price}</p>
        </div>
      ))}

      <Form method="post">
  <button type="submit"  className="bg-white text-black px-2 py-1 mx-20  rounded  my-4  cursor-pointer " >Add Product</button>
</Form> */}
    <HomePage />
    </div>
  );
}
