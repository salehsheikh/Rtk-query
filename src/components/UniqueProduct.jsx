import React from 'react'
import{ useGetProductsByIdQuery} from '../app/service/dummyData'
const UniqueProduct = () => {
    const{data,isLoading,isError}=useGetProductsByIdQuery(8);
    if (isError) {
        return <h1> error something </h1>;
      }
      if (isLoading) {
        return <h1>Loading...</h1>;
      }

  return (
    <div>{data?.brand}</div>
  )
}

export default UniqueProduct