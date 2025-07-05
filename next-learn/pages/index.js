import React from "react"
import Link from "next/link";

const Index =()=>{
    return (
        <div>
            <ul>
                <li>

                <Link href={"/about"} >
                    About
                </Link>

                </li>
                <li>
                    <Link href={"/products"} >
                        products
                    </Link>
                </li>
                <li>
                    <Link href={"/houses"} >
                        houses
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Index;