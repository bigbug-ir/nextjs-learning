import { useRouter } from "next/router";
import React from "react";

const Params = ()=>{
    const router = useRouter()
    const {params=[]} = router.query
    console.log(params)
    return (

        <div>
            <div>
                {params[0]}
            </div>
            with filter Params...
        
        </div>
    )
}

export default Params