import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (

            <div className="bill-info">
                <div className="buyer-info">
                    <h2 className="title">Thong tin nguoi nhan</h2>
                    <label htmlFor="">Ho ten</label>
                    <input type="text" name="" id="name" />

                    <label htmlFor="">So dien thoai</label>
                    <input type="tel" name="" id="phone" />

                    <label htmlFor="">Dia chi</label>
                    <input type="text" name="" id="address" />

                    <label htmlFor="">Thoi gian nhan hang</label>
                    <input type="number" name="" id="time" />
                </div>
                <hr />
                <div className="payment-info">
                    <div className="temp-price">
                        <span className="label">
                        Tam tinh
                        </span>
                        <span className="price">
1200$
                        </span>
                    </div>
                    <div className="transport-fee">
                        <span className="label">
                            Phi van chuyen
                        </span>
                        <span className="price">
                            2$
                        </span>
                    </div>
                    <div className="sum-price">
                        <span className="label">
                            Tong
                        </span>
                        <span className="price">
                            1200$
                        </span>
                    </div>
                    <hr/>
                    <button className="btn-payment">Dat hang</button>
                </div>
            </div>

        );
    }
}

export default Form;