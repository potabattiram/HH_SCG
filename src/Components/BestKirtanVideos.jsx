import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BestKirtanVideos() {
    const videoUrls = [
        'https://www.youtube.com/embed/eI4JgUwPEwc',
        'https://www.youtube.com/embed/RNWPhhacXIk',
        'https://www.youtube.com/embed/Jrq6fbHdAuM'
      ];
  return (
    <>
      <div className="kirtan-component">
        <center><h2>Ecstatic Kirtans by His Holiness</h2></center>
      <Carousel showThumbs={false} autoPlay infiniteLoop style={{backgroundColor:'transparent'}}>
      {videoUrls.map((url, index) => (
        <div key={index}>
          <iframe 
            width="100%" 
            height="500" 
            src={url} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            title={`Video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </Carousel>
      </div>
    </>
  );
}
