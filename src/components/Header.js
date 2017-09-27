import  React, { Component } from 'react'
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Item = Menu.Item;

class Header extends Component {
  state = {
    current: 'home',
    menuList: [
      { name: '首页', key: 'home' },
      { name: 'React', key: 'react' },
      { name: 'Vue', key: 'vue' },
      { name: 'Angular', key: 'angular' },
      { name: 'Preact', key: 'preact' },
      { name: 'webpack', key: 'webpack' }
    ]
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  handleItem = (item, index) => {
    let itemElement = (
      <Item key={item.key}>
        {item.name}
      </Item>
    );
    return itemElement;
  };

  render() {
    const elements = this.state.menuList.map(this.handleItem);
    return (
      <Row>
        <Col span={12}>
          <h2>QC-L</h2>
        </Col>
        <Col span={12}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            class="Menu"
          >
            { elements }
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default Header;