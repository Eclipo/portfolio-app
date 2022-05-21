import React, { Component } from "react";
import "../skills.css";

class SkillDivider extends Component {
  render() {
    return (
      // <table >
      <tr style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <td>
          <div className={this.props.className} id="skillDividerTd"></div>
        </td>

        <td>
          <div className={this.props.className} id="skillDividerTd"></div>
        </td>

        <td>
          <div className={this.props.className} id="skillDividerTd"></div>
        </td>

        <td>
          <div className={this.props.className} id="skillDividerTd"></div>
        </td>

        <td>
          <div className={this.props.className} id="skillDividerTd"></div>
        </td>
      </tr>
      // </table>
    );
  }
}

export default SkillDivider;
