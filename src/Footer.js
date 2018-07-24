import { Component } from "preact";
const Footer = class extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("Footer has rendered");
    return <h3>FOOTER</h3>;
  }
};

export default Footer;
