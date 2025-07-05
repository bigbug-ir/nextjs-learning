import React from "react";
import { useRouter } from "next/router";

const ProductId = ()=>{
    const router= useRouter()
    const productId = router.query.productId
    // const {productId} =router.query
;    return(
        <div>
            product:{productId}
        </div>
    )
}

export default ProductId