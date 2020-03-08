import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProductRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            value: 1
        }
    }
    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: prevState.dropdownOpen
        }))
    }
    render() {
        const { dropdownOpen, value } = this.state;
        return (
            <>
                <h2>Rating</h2>
                <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        {this.props.rate}
                    </DropdownToggle>
                    <DropdownMenu>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => {
                            return (
                                <DropdownItem key={index} onClick={() => this.props.handleDropdown(index)}>{index}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
            </>
        )
    }
}

export default ProductRating;