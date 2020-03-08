import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductStock from './ProductStock';
import { connect } from 'react-redux';
import { getAllProduct, addProject, updateProject, deleteProject } from '../../actions/product.action';
import { logout } from '../../actions/logout.action';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            rate: 1,
            selected: false,
            selectedIndex: -1,
            selectedId: null
        }
    }
    componentDidMount() {
        this.props.getAllProduct()
    }
    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }
    handleDropdown = (value) => {
        this.setState({
            rate: value
        })
    }
    handleAdd = () => {
        if (this.state.name !== '' && this.state.price !== '') {
            if (this.state.selected) {
                this.props.updateProject(this.state.selectedId, {
                    'name': this.state.name,
                    'price': this.state.price,
                    'rating': this.state.rate,

                }).then((response) => {
                    if (response) {
                       this.getProjects()
                    }
                })
            } else {
                this.props.addProject({
                    'name': this.state.name,
                    'price': this.state.price,
                    'rating': this.state.rate
                }).then((response) => {
                    if (response) {
                       this.getProjects()
                    }
                })
            }

        } else {
            alert('Please fill empty fields')
        }
    }
    handleUpdate = (project, i) => {
        this.setState({
            selected: true,
            selectedIndex: i,
            name: project.name,
            price: project.price,
            rate: project.rating,
            selectedId: project.id
        })

    }
    handleDelete = () => {
        this.props.deleteProject(this.state.selectedId).then((response) => {
            if (response) {
               this.getProjects()
            }
        })
    }

    getProjects = () => {
        this.props.getAllProduct()
        this.setState({
            name: '',
            rate: 1,
            price: '',
            selected: false,
            selectedIndex: -1,
            selectedId: null
        })
    }

    handleCancel = () => {
        this.setState({
            name: '',
            price: '',
            rate: 1,
            selected: false,
            selectedId: null,
            selectedIndex: -1
        })
    }
    render() {
        const { name, price, rate } = this.state;
        return (
            <div>
                <div>Product Manager <span><button onClick={this.props.logout}>Log out</button></span></div>
                <ProductList allProject={this.props.allProject} handleUpdate={this.handleUpdate} selectedIndex={this.state.selectedIndex} />
                <ProductStock productCount={this.props.allProject.allProjectData.length + 1} />
                <ProductDetail name={name} price={price} rate={rate} handleChange={this.handleChange} handleDropdown={this.handleDropdown}
                    handleAdd={this.handleAdd} handleCancel={this.handleCancel} handleDelete={this.handleDelete} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allProject: state.allProject
    }
}

export default connect(mapStateToProps, { getAllProduct, addProject, updateProject, deleteProject, logout })(Product);