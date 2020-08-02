import React, { Component } from 'react';

class ProductDetails extends Component {
    render() {
        return (
            <div className="product-details">
                <div className="container">
                    <div className="img-product">
                        <img src="https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$" alt=""/>
                    </div>

                    <div className="product-info">
                        <div className="name">
                            School Old
                        </div>
                        <div className="price">
                            <span className="afterSale">
                                120
                            </span>
                            <span className="beforeSale">
                                150
                            </span>
                        </div>
                        <div>
                            <button className="add-btn">Them vao gio hang</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ProductDetails;