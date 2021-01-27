import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const appImage = ({ className, src, srcSet, alt, ...props }) => {
  const baseUrl = `./public/assets`;
  const fullSrc = `${baseUrl}/${src}`;
  const cssClassName = className ? `app_image ${className}` : "app_image";

  const fullSrcSet = srcSet
    ? srcSet.map((src) => `${baseUrl}/${src}`).join(",")
    : null;
  return (
    <img
      {...props}
      className={cssClassName}
      src={fullSrc}
      srcSet={fullSrcSet}
      alt={alt}
    />
  );
};

appImage.propTypes = {
  srcSet: PropTypes.array,
};

appImage.defaultProps = {};

export default appImage;
