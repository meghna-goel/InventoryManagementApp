import React, { Component } from 'react';
import ProductRating from './ProductRating';

class ProductDetail extends Component{
    render(){
        return(
            <>
            <h2>Product Detail <span></span></h2>
            <form>
                <label>Name</label>
                <input type='text' value={this.props.name} onChange={(e) => this.props.handleChange('name', e)}/>
                <br />
                <label>Price</label>
                $<input type='number' value={this.props.price} onChange={(e) => this.props.handleChange('price', e)}></input>
            </form>
            <ProductRating rate={this.props.rate} handleDropdown={this.props.handleDropdown}/>
            <button onClick={this.props.handleAdd}>Add</button>
            <button onClick={this.props.handleAdd}>Save</button>
            <button onClick={this.props.handleDelete}>Delete</button>
            <button onClick={this.props.handleCancel}>Cancel</button>
            </>
        )
    }
}

export default ProductDetail;