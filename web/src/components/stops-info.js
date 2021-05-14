import React, { PureComponent } from "react";

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.stop}`;

    return (
      <div className="stops-info">
        <div>
          {displayName} |{" "}
          {/* <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            Wikipedia
          </a> */}
        </div>
        <img  src={info.image} />
      </div>
    );
  }
}