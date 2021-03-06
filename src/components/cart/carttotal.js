import React from 'react'
import{Link} from 'react-router-dom'
export default function carttotal({value}) {
    const {cartsubtotal,carttaxe,carttotal,clearcaart}=value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to='/'>
                        <button type ="button" onClick={()=>{clearcaart()}} className="btn btn-outline-danger text-uppercase mb-3 px-5">
                        clear cart
                        </button>                   
                     </Link>
                     <h5>
                     <span className="text-title">
                         Subtotal :
                     </span>
                     <strong>
                         $ {cartsubtotal}
                     </strong>
                     </h5>
                     <h5>
                     <span className="text-title">
                         tax :
                     </span>
                     <strong>
                         $ {carttaxe}
                     </strong>
                     </h5>
                     <h5>
                     <span className="text-title">
                         total :
                     </span>
                     <strong>
                         $ {carttotal}
                     </strong>
                     </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
