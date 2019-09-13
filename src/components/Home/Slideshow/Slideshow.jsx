import React from "react";

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <style jsx global>
          {`
            .slideshow {
              height: 300px;
              width: 600px;
            }
          `}
        </style>
        <div>
          <img
            className="slideshow"
            src="https://assets1.ignimgs.com/2019/05/14/wowclassic-blogroll-1557846229199.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Slideshow;
