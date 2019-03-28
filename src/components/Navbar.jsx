import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const style = {
  root: {
    backgroundColor: "#FFFFFF",
    boxShadow: "2px 2px 10px -2px rgba(0,0,0,.5)",
  },
  muvsicLogo: {
    width: 70,
    height: 70,
  },
  span1: {
    marginLeft: 150,
  },
  span2: {
    marginLeft: 50,
  },
  formControl: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#8C8C8C",
    borderRadius: 20, 
  },
  purple: {
    color: "#4b2c70"
  }
};

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" style={style.root} sticky="top">
        <Container>
          <Navbar.Brand href="#home"><Image src="https://muvsic.com/assets/logo-head-e333c192173f11f7800ec4fb6af16542156e448c3535d1fb587d2fbc89716a0b.png" style={style.muvsicLogo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <span style={style.span1}></span>
            <Form inline style={style.formControl}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" style={style.formControl}/>
            </Form>
            <span style={style.span2}></span>
            <i className="far fa-envelope fa-2x" style={style.purple}></i>
            <span style={style.span2}></span>
            <i className="far fa-bell fa-2x" style={style.purple}></i>
            <span style={style.span2}></span>
            <i className="far fa-user-circle fa-2x" style={style.purple}></i>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;