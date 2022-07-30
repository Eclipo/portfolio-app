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
  textPlayID = "textPlay_"+this.props.id;
  playBoolean = this.props.playBoolean;
  playText = this.props.playText;
  textColor = this.props.textColor;
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    
    AnimationPlayRefreshBegin(this.playID, this.refreshID,this.textPlayID);
    
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
              className="fntAwesome"
              icon={faSyncAlt}
              color="var(--tint-navy)"
              style={{margin:'auto'}}

            ></FontAwesomeIcon>
          </button>
        </div>

        <div className="flexCenter d-block mx-auto w-50">
        <h4 id={this.textPlayID} style={{color:this.textColor}} >{this.playText}</h4>

          <button
            id={this.playID}
            className="btnPlay"
            onClick={this.handleClick}
          >
            <FontAwesomeIcon
              className="fntAwesome"
              icon={faPlay}
              color="var(--tint-navy)"
              style={{margin:'auto'}}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    );
  }
}

export default PlayRefresh;
