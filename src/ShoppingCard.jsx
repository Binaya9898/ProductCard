import React from 'react'
// import "./shoes.png"

function ShoppingCard(props) {
  return (
    // <div className="container" style={{margin: "200px"}}>
        <div className="card" style={{width: "15rem"}}>
  <img src="https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.2.1547550523.1678088410&semt=ais" className="card-img-top" alt="..." style={{width: "10rem",
  height:"100px"}}></img>
  <div className="card-body">
    <h5 className="card-title">Vans shoes</h5>
    <p className="card-text">shoes</p>
    <a href="#" className="btn btn-primary mx-2" onClick={()=>props.decQty()}>-</a>
    <a href="#" className="btn btn-primary mx-2" id="qty-btn">1</a>
    <a href="#" className="btn btn-primary mx-2" onClick={()=>props.incQty()}>+</a>
    <p className="card-text my-4" >Total <span id="total-amt">100</span></p>


  </div>
</div>
    // </div>
  )
}

export default ShoppingCard
