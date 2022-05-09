import React, {useState, useEffect} from "react";
import { product} from '../services/productServices';
import { useParams} from 'react-router-dom';


export default function BlogPage(props) {
    console.log(props);
    const {id} = useParams();
    const [value,setvalue] = useState();
    const [popular,setpopular] = useState([]);
    useEffect(()=>{
      SingleBlogPage(id)
    },[])
    async function SingleBlogPage(id){
        const result = await product.SingleBlogStory(id);
        const result2 = await product.MostViewBlog();
        console.log(result2);
        console.log(result)
        setvalue(result.data);
        setpopular(result2.data);
    }
  return (
    <section class="blog-page-section full-height">
    <div class="container">
        <div class="slim-heading my-4">Blog Detail</div>
        <div class="row">
            <div class="col-lg-4">
                <div class="blogs-left-wrap">
                    <div class="search-wrap">
                        <div class="search-bar">
                            <form class="input-group">
                              <input type="text" class="form-control" placeholder="Search..."/>
                              <div class="input-group-append">
                                <button class="btn btn-black" type="button">
                                  <i class="fa fa-search"></i>
                                </button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="blogs-tab-wrap mt-4">
                    <div class="blogs-tab">
                        <ul class="nav nav-tabs" id="blogtab" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active show" id="popular-tab" data-toggle="tab" href="#popular" role="tab" aria-selected="false">Popular</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="latest-tab" data-toggle="tab" href="#latest" role="tab" aria-selected="true">Latest</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="blogTabContent">
                            <div class="tab-pane fade active show" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                                <div class="search-results-wrap">
                                {popular?.map((item,index)=>( 
                                   <a href="#" class="result-ridect">
                                      <div class="result-img">
                                        <img src={"http://cf467543a5.nxcli.net/media/mageplaza/blog/post/"+ item?.image} class="img-fluid"/>
                                      </div>
                                      <div class="result-desc">
                                        <div class="result-desc-name">{item?.value}</div>
                                        <div class="result-desc-txt">{item?.name}</div>
                                      </div>
                                    </a>
                                ))}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="latest" role="tabpanel" aria-labelledby="latest-tab">
                                <div class="search-results-wrap">
                                {popular?.map((item,index)=>( 
                                   <a href="#" class="result-ridect">
                                      <div class="result-img">
                                        <img src={"http://cf467543a5.nxcli.net/media/mageplaza/blog/post/"+ item?.image} class="img-fluid"/>
                                      </div>
                                      <div class="result-desc">
                                        <div class="result-desc-name">{item?.value}</div>
                                        <div class="result-desc-txt">December 13, 2021</div>
                                      </div>
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="blog-detail-wrap">
                    <div class="blogs-card">
                        <div class="blog-image"><img src={"http://cf467543a5.nxcli.net/media/mageplaza/blog/post/"+value?.image} class="w-100" alt="" title=""/></div>
                        <h2 class="blog-heading">{value?.name}</h2>
                        <p class="blog-descripton">{value?.short_description}</p>
                        <ul class="blog-date-time my-3">
                          <li><i class="fa fa-solid fa-calendar"></i> December 6, 2021</li>
                          <li><i class="fa fa-solid fa-user"></i> <a href="#">Admin</a></li>
                          <li><i class="fa fa-solid fa-eye"></i>3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
//       <>
//     { value ?
//     <div className='container' >
//         <h6>{value.name}</h6>
//     <img src={"http://cf467543a5.nxcli.net/media/mageplaza/blog/post/"+value.image} alt="blog alt" />
//     <p>{value.short_description}</p>
//     <hr></hr>
//     <p>{value.publish_date}</p>
//     <hr></hr>
//     <h5>About the Author</h5>
//     </div>
// :''}
// <div className='container' >
//  <h6>Popular</h6>
// {popular?.map((item,index)=>(
//    <div key={index} className='card' >
//     <img src={"http://cf467543a5.nxcli.net/media/mageplaza/blog/post/"+ item.image}alt='popular blog' />
//     <p>{item.name}</p>
//  </div>
// ))}
// </div>
// </>
  )
}