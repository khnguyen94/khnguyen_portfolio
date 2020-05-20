import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

onChange = ({ target: { value } }) => {
  this.setState({ value, copied: false });
};

onClick = ({ target: { innerHTML } }) => {
  console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
};

onCopy = () => {
  this.setState({ copied: true });
};

class CopyToClipRender extends Component {
  state = {
    value: "kh.nguyen0101@gmail.com",
    copied: false
  };

  render() {
    return (
      <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
        {/* <span>kh.nguyen0101@gmail.com</span> */}
      </CopyToClipboard>
    );
  }
}

export default CopyToClipRender;
