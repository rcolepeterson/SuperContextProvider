import { Component } from "preact";
const Footer = class extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Footer: shouldComponentUpdate");
    console.log("Footer: nextProps", nextProps);
    console.log("Footer: nextState", nextState);
    return false;
  }
  render() {
    console.log("Footer has rendered");
    return <h3>FOOTER</h3>;
  }
};

export default Footer;
