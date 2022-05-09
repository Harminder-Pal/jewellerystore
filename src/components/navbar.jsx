import React, { useState, useEffect } from 'react';
import { product } from '../services/productServices';
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [value, setvalue] = useState([]);

  useEffect(()=> {
    NavBar()
   }, []);

  async function NavBar() {

    const result = await product.navbarApi();

    console.log(result)

    setvalue(result.data.children_data);
  }
  return (

    <>
      {value.length > 0 ?
        <nav className="bg-theme navbar navbar-expand-md">
          <div className="collapse navbar-collapse nav-custom" id="navbar-content">
            <ul className="navbar-nav mr-auto">

              {value?.map((item, index) => (

                <li key={index} className={item.children_data.length > 0 ? 'nav-item dropdown' : 'nav-item'}>



                  {item?.children_data?.length > 0 ?

                    <a href={'/products/' + item.name } className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                      {item.name}

                    </a>

                    :

                    <a href={'/products/' + item.name} className="nav-link" >{item.name}</a>



                  }
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                    <div className="container-fluid">



                      <div className="row">

                        {item?.children_data?.map((items, index) => (

                          <div key={index} className="col-md-4">

                            <ul className="nav flex-column">

                              <li className="nav-item">

                                <a href={'/products/' + item.name + '/' + items.name} className="nav-link parent" >{items.name}</a>

                              </li>

                              {items?.children_data?.map((itemss, index) => (

                                <li key={index} className="nav-item">

                                  <a href={'/products/' + item.name + '/' + items.name + '/' + itemss.name} className="nav-link active">{itemss.name}</a>

                                </li>
                              ))}

                            </ul>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </li>

              ))}

            </ul>
          </div>
        </nav>

        : ''}
    </>
  )
}

export default Navbar