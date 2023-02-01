import React, { useState } from 'react'
import styles from './CardsRender.module.css';
import { getallUsers } from '../service/api'
import { useEffect } from 'react';
import PaginationPage from './PaginationPage';
import imgH from '../Assets/Hospital-Project-Consulting-Service.jpg'
import { useNavigate } from 'react-router-dom';


const CardsRender = () => {
    const [data, setData] = useState([]);
    const [perpage, setPerpage] = useState([])
    let [currentPage, setCurrentPage] = useState(1);

    let src = "https://www.w3schools.com/w3css/img_avatar3.png";

    const loadUserData = async () => {
        // const response = await getallUsers();
        // const strAscending = [...response.data].sort((a, b) =>
        //     a.username > b.username ? 1 : -1,
        // );
        // // setData(response.data);
        // setData(strAscending)
        // // setPerpage(response.data.slice(0, 6))
        // setPerpage(strAscending.slice(0, 6))
        // //setting array
        // console.log(response.data)


        const response = await getallUsers();
        console.log(response.data)
        let response_Data = (response.data).reverse();
        // let response_Data = response.data.reverse();
        setData(response_Data);
        // setData(strAscending)
        // setPerpage(response.data.slice(0, 6))
        setPerpage(response_Data.slice(0, 6))
        //setting array
        // console.log(response.data)



    }

    useEffect(() => {
        loadUserData();
    }, []);
    console.log(perpage)

    const prevPageHandler = () => {
        if (currentPage > 1) {
            setPerpage(data.slice(currentPage * 6 - 12, currentPage * 6 - 6));
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPageHandler = () => {
        if (currentPage < Math.ceil(data.length / 6)) {
            setPerpage(data.slice(currentPage * 6, currentPage * 6 + 6))
            console.log(currentPage)
            setCurrentPage(currentPage + 1);
            console.log("increased PAGE : " + currentPage)
        }
    }

    const navigate = useNavigate()

    const nextPageNavigationHandler = (id) => {
        navigate(`/OurScience/${id}`)
    }


    return (
        <div className='container-fluid p-0 m-auto' style={{ marginTop: "0px" }}>
            <h2 className='d-none d-md-block ' style={{
                fontWeight: "650", fontSize: "32px", marginLeft: "5%", color: "#ffffff"
            }}> Hospital Mangement System</h2>
            <div className={` row col-12 d-flex m-0 p-0 ${styles.viewHeight}`}>


                <div className=' order-sm-2 order-2 col-12  col-sm-12 col-md-5 col-lg-5 ' >
                    <div className='row' style={{ boxSizing: "border-box" }}>
                        <div className='col-1 d-flex align-items-center'>
                            {/* <h4>This is for Left arrow</h4> */}
                            {data.length > 6 && <button onClick={prevPageHandler} className={` ${styles.button}`} style={{ borderRadius: "50%", padding: "4%", outline: "transparent", border: "none" }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg></button>
                            }
                        </div>
                        <div className='col-8 m-auto p-0'>
                            <div className="row  row-cols-3 row-cols-md-2  row-cols-sm-3  m-1 gx-1 " >
                                {data.length > 0 ? perpage.map((item) => {
                                    return (
                                        <div className="col mb-1" key={item.id} onClick={() => nextPageNavigationHandler(item.id)}>
                                            <div className={`card ${styles.x}`} key={item.id} style={{ borderRadius: 0 }}>
                                                <img src={src} className="card-img-top " style={{ height: "70px", width: "85%", margin: "auto", marginTop: "5%" }} alt="..." />
                                                <div className="card-body p-0 m-0" >
                                                    <h5 className={`font-weight-bold ${styles.pSizeSmaller}`}>{item.username}</h5>
                                                    {/* <p className={styles.pSizeSmaller}> {item.email}</p> */}
                                                    <p className={`card-Text ${styles.pSizeSmaller}`}>1This went. con a lit longer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                ) : ""
                                }
                            </div>
                        </div>
                        <div className='col-1 d-flex align-items-center m-2 p-0'>
                            {/* <h4>This is for Right Arrow</h4> */}
                            {data.length > 6 && <button className={styles.button} onClick={nextPageHandler} style={{ borderRadius: "50%", padding: "4%", outline: "transparent", border: "none" }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg></button>
                            }
                        </div>

                    </div>
                    <div className='row '>
                        {/* <h5>This is for active bars under</h5> */}
                        <div className='d-flex flex-row justify-content-center p-3'>
                            <PaginationPage data={data} currentPage={currentPage} />
                        </div>
                    </div>
                </div>
                <div className=' order-md-2 col-lg-7 col-sm-12 col-12 col-md-7  d-flex  '>

                    <img src={imgH} style={{ minHeight: "100%", minWidth: "100%" }} alt="" />

                </div>
            </div>

        </div >
    )
}
export default CardsRender
