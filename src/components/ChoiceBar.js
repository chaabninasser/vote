import React from "react";

export default function ChoiceBar({ title, count, percent, onClickHandler }) {
  return (
    <div className="ChoiceBar" onClick={onClickHandler}>
      <div className="Progress" style={{ width: percent + "%" }}>
        <div className="ChoiceBarTitle">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="ChoiceBarBadge">
        <h3>Vote</h3>
        <h5>{count}</h5>
      </div>
    </div>
  );
}

ChoiceBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  percent: React.PropTypes.number.isRequired,
  onClickHandler: React.PropTypes.func.isRequired
};
