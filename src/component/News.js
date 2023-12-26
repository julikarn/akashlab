import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
const News = () => {

    const [data, setData] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 10;



    useEffect(() => {

        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`

            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));

            setData(data);
        };

        getComments();


    }, [limit]);


    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`

        );
        const data = await res.json();
        return data;
    };
    const hanglePageclick = async (data) => {

        console.log(data.selected)
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setData(commentsFormServer);
    }
    const datas = data;
    console.log("datas", datas);
    return (
        <div>

            <div className="container">
                <div className="row m-2">

                    {datas && datas.map((datas, index) => {
                        return (

                            <div key={index} className="col-sm-6 col-md-4 v my-2">
                                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                    <div className="card-body">
                                        {/* <Router> */}
                                            <Link to={`detail/${datas.id}`}>

                                                <h5 className="card-title text-center h2">Id :{datas.id} </h5>
                                                <h6 className="card-subtitle mb-2 text-muted text-center">
                                                    {datas.email}
                                                </h6>
                                                <p className="card-text">{datas.body}</p>
                                            </Link>
                                        {/* </Router> */}


                                    </div>
                                </div>
                            </div>



                        )
                    })

                    }

                </div>
            </div>


            <div className='mt-5'>

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={hanglePageclick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />

            </div>



        </div>
    )
}

export default News;
