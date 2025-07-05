import Link from "next/link";
import React from "react";

const IndexProduct = ()=>{
    return (
        <div>   
            <Link href={{
                pathname:"/products/1",
                query:{id:1}
            }}>product1</Link >
            <Link href={{
                pathname:"/products/2",
                query:{id:2},
            }} replace>product2</Link >
            <Link href={{
                pathname:"/products/3",
                query:{id:3},
            }}>product3</Link >
            <Link href={{
                pathname:"/products/4",
                query:{id:4},
            }}>product4</Link >
        </div>
    )
}

export default IndexProduct