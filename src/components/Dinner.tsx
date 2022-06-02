// @flow 
import * as React from 'react';
type Props = {
    title: string,
    price: number,
    children: string
    image: string
};
export const Dinner = (props: Props) => {

    const { title, price, children, image } = props;

    return (
        <div className="col-md-4">
            <div className="single_menu_list">
                <img src={image} alt=""></img>
                <div className="menu_content">
                    <h4>{title}  <span>${price}</span></h4>
                    <p> {children}</p>
                </div>
            </div>
        </div>
    );
};