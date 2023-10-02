import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function React() {

    const [productdata, setproductdata] = useState([]);
    const [productname, setproductname] = useState('');


    const addproduct = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: productname,
                price: 100,
                oldprice: 100
                /* other product data */
            })
        })
            .then(res => res.json())
            .then(console.log);

    }

    const getallprod = () => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setproductdata(data.products));

    }
    return (
        <>

            <h1>Test Api Data</h1>


            <input type="text" name="productname" onChange={e => setproductname(e.target.value)} ></input>
            {console.log("product name data", productname)}
            <Button onClick={addproduct} >Add Product</Button>


            <Button onClick={getallprod}>Get All Product</Button>

            {
                console.log("My Products Data", productdata)
            }

            {
                productdata.map((item) => (
 
                    <>

                        <p>Product Name: {item.title}</p>
                        <p>Product Price: {item.price}</p>
                    </>

            ))}
        </>
    );
}
export default React;