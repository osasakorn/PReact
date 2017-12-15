
import React, { Component } from 'react'
import '../../styles/semantic.min.css'
import { Button, Header, Image, Form } from 'semantic-ui-react'
import { publishPost } from '../../Api'


import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import './receiver.css';

class Receiver extends Component {

  constructor() {
    super();
    this.state = {
        title: '',
        content: '',
        category: '',
        contact: '',
    };
    this.onChange = this.onChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    
    this.setState({ category: e.target.value+','+ this.state.category })
    console.log(e.target.value+','+ this.state.category);
    
  }

  onTextChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
    console.log(value);
  }

  onSubmit (e) {
    
    publishPost(this.state.title,this.state.content,this.state.category,this.state.contact)
    .then(data => {
      if (data.status === 200) {
        this.props.history.replace('/news')
      }
    })
    
  }

  render() {

    return (
      <div className="receiver">
        <Navbar />
        <div class="rebody">
          <br />
          <Header>I need<i aria-hidden="true" class="book icon"></i> </Header>
          <Form>
            <div class="ui vertically divided grid">
              <div class="two column row">
                <div class="thirteen wide column">
                  <Form.Input placeholder='Title' name='title' onChange={this.onTextChange}/>
                </div>
                <div class="three wide column">
                  <div class="ui icon labeled vertical buttons">
                    <button class="ui button" role="button">
                      <i aria-hidden="true" class="upload icon"></i>Upload</button>
                  </div>
                </div>
              </div>
            </div>
            <Form.Group grouped>
              <Header>Category</Header>
                <div class="ui vertically divided grid">
                <div class="three column row">
                  <div class="column">
                    <Form.Field label='Generalities' value='Generalities' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Philosophy' value='Philosophy' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Religion'value='Religion'  control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Social sciences' value='Social sciences' control='input' type='checkbox' onChange ={this.onChange} />
                  </div>
                  <div class="column">
                    <Form.Field label='Language' value='Language' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Science' value='Science' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Technology' value='Technology' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Arts and recreation'  value='Arts and recreation'control='input' type='checkbox' onChange ={this.onChange} />
                  </div>
                  <div class="column">
                    <Form.Field label='Literature' value='Literature' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='History and geography' value='History and geography' control='input' type='checkbox' onChange ={this.onChange} />
                    <Form.Field label='Others' value='Others' control='input' type='checkbox' onChange ={this.onChange} />
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Field label='Body' control='textarea' rows='6' name='content' onChange={this.onTextChange}/>
            <Form.Input placeholder='Contact' name='contact' onChange={this.onTextChange}/>
          </Form>
          <br />
          <Button  class="buttonre ui button" ><a href="/">back</a></Button>
          <Button floated='right' class="buttonre" positive icon='checkmark' labelPosition='right' content="Submit" onClick={this.onSubmit} />
        </div>
      </div>
    )
  }
}


export default Receiver;