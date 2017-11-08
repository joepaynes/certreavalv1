import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { 
    Menu,
    Icon
} from 'semantic-ui-react';

class VerticalMenu extends Component {
  state = { activeItem: this.props.activeItem }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item as={Link} to="/dashboard" name='Certificates' active={activeItem === 'Certificates'} onClick={this.handleItemClick}>
            <Icon name="list layout" size="large" />
            Certificates
        </Menu.Item>
        <Menu.Item name='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick}>
        <Icon name="settings" size="large" />
            Settings
        </Menu.Item>
      </Menu>
    )
  }
}

export default VerticalMenu;