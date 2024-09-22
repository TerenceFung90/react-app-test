import Link from 'next/link';
import React from 'react'

function ProductListing() {
    return (
        <>
            <div>this is product listing page</div>
            
            <br/>
            <hr/>
            <div> Site Map </div>
            <Link href="/product">Product Listing page</Link><br/>
            <Link href="/product/details">Product Details</Link><br/>
        </>
    )
}

export default ProductListing;