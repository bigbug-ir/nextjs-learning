import React from "react";
import { useRouter } from "next/router";

const ProductId = ()=>{
    const router= useRouter()
    const productId = router.query.productId
    // const {productId} =router.query

    const handlePushtoDetails = ()=>{
        // some action...
        // according to response...

        router.push(`${productId}/details`)
    }
    console.log(router.query)
;    return(
        <div>
            product:{productId}
            <button onClick={handlePushtoDetails}>
                product :{productId} details
            </button>
        </div>
    )
}

export default ProductId