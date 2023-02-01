import React from 'react'

const PaginationPage = ({ data, currentPage }) => {
    let pagesNumb = []
    for (let i = 1; i < Math.ceil(data.length / 6) + 1; i++) {
        pagesNumb.push(i)
    }
    console.log(pagesNumb)
    return (

        <>
            {pagesNumb.length > 0 ? pagesNumb.map((page, index) => {
                return (
                    <div className='flex-fill' data-testid={'index' + index} style={{ margin: "0.5%", maxWidth: "10%", backgroundColor: currentPage == index + 1 ? "white" : 'rgba(255, 255, 255, 0.4)', minWidth: "1px", height: "4px", borderRadius: "15%" }} key={index + 1}></div>
                )
            }) : ""
            }
        </>
    )
}

export default PaginationPage

