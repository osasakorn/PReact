import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'

import './navbar.css';
//import '../../styles/semantic.min.css'

class Navbar extends Component {
    state = { activeItem: 'news' }
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    
      signout = event => {
        localStorage.clear();
        console.log(this.props);
       window.location.reload()
      }

    render() {
        return (
            <Menu >
                <Menu.Item href="/news" name='news' onClick={this.handleItemClick} />
                <Menu.Item href='/sender' name='sender' onClick={this.handleItemClick} />
                <Menu.Item href='/receiver' name='receiver' onClick={this.handleItemClick} />
                
                {!localStorage.getItem('username') ? (<Menu.Menu position='right'>
                    <Menu.Item href='/register' name='sign up'  onClick={this.handleItemClick} />
                    <Menu.Item href='/login' name='Sign In '  onClick={this.handleItemClick} />
                </Menu.Menu>
                ) : (<Menu.Menu position='right'>
                    {localStorage.getItem('username') == 'admin' ?
                    (<Menu.Item href='/manage' name='manage' onClick={this.handleItemClick} />):null}
                    <Menu.Item name={localStorage.getItem('username')} onClick={this.handleItemClick} />
                    <Menu.Item name='Sign out' onClick={this.signout} /> </Menu.Menu>
                    )}
            </Menu>
        )
    }
}

export default Navbar;