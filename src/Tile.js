export default props => (
  <div
    onClick={props.handler}
    style={{ padding: 20, margin: 20, color: "white", background: "red" }}
  >
    I am a {props.label}
  </div>
);
