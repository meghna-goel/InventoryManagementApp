import React, { Component } from 'react';

class ProductList extends Component{
    render(){
        return(
            <>
            <h2>Product</h2>
            {!this.props.allProject.allProjectData.length ?
                <div>No Project</div>
            :
            this.props.allProject.allProjectData.map((project, i) => {
                return(
                <div key={i} style={this.props.selectedIndex === i ? {backgroundColor: "blue"} : {backgroundColor: "white"}} onClick={() => this.props.handleUpdate(project, i)}>{project.name}<span>{'    '}${project.price}</span></div>
                )
            })
            }
            </>
        )
    }
}

export default ProductList;