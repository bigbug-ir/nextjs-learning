import React from "react";
import { useRouter } from "next/router";

const Details = ()=>{
    const router = useRouter()
    const {productId} = router.query
    return(
        <div>
            details {productId}
        </div>
    )
}

export default Details