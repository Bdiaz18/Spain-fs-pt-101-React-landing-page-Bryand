import React from "react"

const MyCard = () => {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="random pic" />
            <div className="card-body">
                <h5 className="card-title">Your title here.</h5>
                <p className="card-text">Lorem fistrum commodo qui elit ut consectetur. Esse tempor qui exercitation. Tempor nostrud sed a gramenawer. Eiusmod ex adipisicing aliquip ex exercitation. Officia aliquip de la pradera tempor consequat ullamco.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
}

export default MyCard