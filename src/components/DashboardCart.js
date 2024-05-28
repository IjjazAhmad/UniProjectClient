import React from 'react'
export default function DashboardCart(props) {
    const {name, total, icon, img,bg} =props
    return (
        <>
            <div className="cart   m-1 p-3 py-4 rounded-4" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>

                <div className="row ">
                    <div className="col-8 lh-sm">
                        <span className='fw-normal fs-5'>TOTAL <br></br> {name}</span><br />
                        <span className='fw-bold fs-3'>{total}</span><br />
                    </div>
                    <div className="col-4 ">
                        <i className={`fa-solid ${icon} rounded-circle p-3 bg-white`} style={{color:`${bg}`, fontSize:"50px"}}></i>
                    </div>
                </div>
                
            </div>
        </>
    )
}
