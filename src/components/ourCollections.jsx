import React, { useEffect, useState } from 'react';
import { product } from '../services/productServices';


const OurCollections = () => {
    const [value, setvalue] = useState();

    useEffect(async () => {

        const result = await product.ourCollectionApi();

        console.log(result.data)

        setvalue(result.data);

    }, [])
    return (
        <>
            {value ?
                <div  dangerouslySetInnerHTML={{ __html: value.items[0].content ? value.items[0].content : 'Opps page not found' }} />
 
        : ""}
    </>

)
}

export default OurCollections