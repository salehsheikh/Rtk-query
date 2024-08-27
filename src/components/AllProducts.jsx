import { useGetAllProductQuery } from "../app/service/dummyData";
const AllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductQuery();
  console.log(data);
  if (isError) {
    return <h1> error something </h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
     {data?.products.map((p)=>(
        <h1 key={p.id}>{p.title}</h1>
     ))}
    </div>
  );
};
export default AllProducts;
