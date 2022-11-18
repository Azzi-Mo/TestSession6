import { useState, useEffect } from "react";
function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      <section className="col-9 sec_prod">
        
            <table className="table table-striped ">
              <thead className="">
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col-3">option</th>
                </tr>
              </thead>
              <tbody>
                {product.map((prod) => {
                  return (
                    <>
                      <tr key={prod.id}>
                        <th scope="row">{prod.id}</th>
                        <td>{prod.title}</td>
                        <td>{prod.price}</td>
                        <td>
                         <div>
                         <button type="button" class="btn btn-success">view</button>
                         <button type="button" class="btn btn-danger">delet</button>
                         <button type="button" class="btn btn-warning">edit</button>
                         </div>
                        </td>

                      </tr>
                    </>
                  );
                })}
              </tbody>
          </table>
        
      </section>
    </>
  );
}
export default Products;
