import React from 'react'
import Table from '../table/table'
import { productData } from '@/app/lib/data'

const Product = () => {
  const theadData:Array<string> = ["Product", "Description", "Created At", "Price", "Stock", "Action"]
  return (
    <div>
      <Table theadData={theadData} tbodyData={productData}/>
    </div>
  )
}

export default Product