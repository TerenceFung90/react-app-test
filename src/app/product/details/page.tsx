import Link from 'next/link'
import React from 'react'

function ProductDetails() {
    return (
        <>
            <div>this is a product details page</div>

            <br/>
            <hr/>
            <div> Site Map </div>
            <Link href="/product">Product Listing page</Link><br/>
            <Link href="/product/details">Product Details</Link><br/>
        </>
    )
}

export default ProductDetails