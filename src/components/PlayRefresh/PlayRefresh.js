import React, { Component } from "react";
import "./playRefresh.css";
import { faPlay, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PlayAnimation,
  AnimationPlayRefreshEnd,
  AnimationPlayRefreshBegin,
} from "../../PlayAnimation.js";
class PlayRefresh extends Component {
  refreshID = "refresh_" + this.props.id;
  playID = "play_" + this.props.id;
  playBoolean = this.props.playBoolean;

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    AnimationPlayRefreshBegin(this.playID, this.refreshID);

    var delayTime = 0;
    delayTime = PlayAnimation(event.currentTarget.id, this.playBoolean);
    console.log("the returned delayTime is...." + delayTime);
    if (delayTime > 0) {
      setTimeout(
        () => AnimationPlayRefreshEnd(this.playID, this.refreshID),
        delayTime
      );
    }
  }

  render() {
    return (
      <div className="justify-content-center mt-2 mb-2">
        <div className="flexCenter d-block">
          <button
            id={this.refreshID}
            className="btnRefresh mx-auto bg-transparent"
            onClick={this.handleClick}
          >
            <FontAwesomeIcon
              icon={faSyncAlt}
              color="var(--primary-light-green)"
              className="fntAwesome"
            ></FontAwesomeIcon>
          </button>
        </div>

        <div className="flexCenter d-block">
          <button
            id={this.playID}
            className="btnPlay mx-auto"
            onClick={this.handleClick}
          >
            <FontAwesomeIcon
              className="fntAwesome"
              icon={faPlay}
              color="var(--primary-light-green)"
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    );
  }
}

export default PlayRefresh;
