import React from 'react'
import "./Product.scss"
export const Product = () => {
    return (
        <>
            <div className="box-product">
                <div className="img-product">
                    <div>
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" />
                    </div>
                    <div>
                        <p>sline chon anh</p>
                    </div>
                </div>
                <div className="infomation-product">
                    <div className="infomation-text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis at fuga commodi eum.
                            Quibusdam hic inventore accusamus voluptates aut maxime minima exercitationem, et assumenda?
                            Necessitatibus ratione perferendis aliquam dignissimos molestias!
                        </p>
                    </div>
                    <div className="infomation-btn">
                        <table>
                            <td> tru</td>
                            <td>ketqua</td>
                            <td>cong</td>
                        </table>

                        <button>chon mua</button>
                    </div>
                </div>

            </div>
        </>
    )
}
