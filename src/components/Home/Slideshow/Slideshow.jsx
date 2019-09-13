import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../../App.css';

class Slideshow extends Component {
    render() {
        return (
          <div className="slideshow">
            <Carousel>
              <div>
                <img
                  src="https://assets1.ignimgs.com/2019/05/14/wowclassic-blogroll-1557846229199.jpg"
                  alt=""
                />
                <p className="legend">Description of pic 1</p>
              </div>
              <div>
                <img
                  src="https://assets1.ignimgs.com/2019/05/14/wowclassic-blogroll-1557846229199.jpg"
                  alt=""
                />
                <p className="legend">Description of pic 2</p>
              </div>
              <div>
                <img
                  src="https://assets1.ignimgs.com/2019/05/14/wowclassic-blogroll-1557846229199.jpg"
                  alt=""
                />
                <p className="legend">Description of pic 3</p>
              </div>
            </Carousel>
          </div>
        );
    }
};

export default Slideshow;
