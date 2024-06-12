import PropTypes from 'prop-types';
// import AOS from 'aos';
// import  { useEffect } from 'react';

const ImageComponent = ({ clas,src, delay }) => {
    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000, // Set animation duration (in milliseconds)
    //       once: false, // Set 'once' option to false to loop animations
    //     });
    //   }, []);
    return (
      <img
        src={src}
        data-aos="zoom-in"
        data-aos-delay={delay}
        alt=""
        // className=" rounded h-44 "
        className={clas}
      />
    );
  };
ImageComponent.propTypes={
    src:PropTypes.string.isRequired,
    clas:PropTypes.string.isRequired,

    delay:PropTypes.number.isRequired
};
export default ImageComponent;  