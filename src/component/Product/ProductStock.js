import React, { Component } from 'react';

class ProductStock extends Component{
    render(){
        return(
        <h2>Product count: {this.props.productCount}</h2>
        )
    }
}

export default ProductStock;