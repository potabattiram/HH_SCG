import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from "./carouselmedia/one.jpg";
import two from "./carouselmedia/two.jpg";
import three from "./carouselmedia/three.jpg";
import four from "./carouselmedia/four.jpg";

export default function CarouselSlideComponent() {
    return (
      <div>
        <center>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          showIndicators={false}
          interval={2000}
          width={'90%'}
        >
          <div>
            <img src={one} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={two} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={three} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={four} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
        </Carousel>
        
        <p style={{margin:'8px'}}>The 61st translation of the Bhagavad Gita, titled "Bhagavad Gita Kouma li ete," has been launched in the Mauritian language (Kreol) by the Governor of the Republic of Mauritius. This translation has been undertaken by His Grace Ram Sevak Das Prabhu.</p>
        </center>
      </div>
    );
  }