import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='prdouct'
          active={activeItem === 'product'}
          href='/product'
          onClick={this.handleItemClick}
        >
          Product
        </Menu.Item>

        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          href='/auth'
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>

        <Menu.Item
          name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
        >
          Cart
        </Menu.Item>
      </Menu>
    )
  }
}
