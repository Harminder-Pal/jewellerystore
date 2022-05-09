import React,{useEffect,useState} from 'react'

import { product } from '../services/productServices';



const SaleBanner = () => {

    const [value, setvalue] = useState([]);

    useEffect( async() => {

        const result = await product.salebannerApi();

        setvalue(result.data.items)

        console.log(result)

    }, []);

  return (

<>

            {value.map((item, index) => (

                <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />

                ))}



</>

    )

}



export default SaleBanner