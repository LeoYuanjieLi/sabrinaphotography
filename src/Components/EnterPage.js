import React from "react";
import BackgroundSlideshow from 'react-background-slideshow';
import image1 from '../public/2.jpg';
import image2 from '../public/6.jpg';
import image3 from '../public/15.jpg';
import BackgroundImage from '../public/background-image.jpg';
import Logo from '../public/logo_2.png';
class EnterPage extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log('handle submit works');
  }
    render(){
        return(
          <div className="EnterPage">
            <BackgroundSlideshow className="Background" images={[BackgroundImage, image1, image2, image3]} />
            <div className="Logo">            
              <img src={Logo}/>
            </div>
            <form onSubmit={this.handleSubmit}>
              <button type="submit" class="EnterButton">
                <span> Enter </span>
              </button>
            </form>
          </div>
        )
      }
  };

export { EnterPage };

