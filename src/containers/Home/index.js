import React from "react";

import Home from "../../components/Home";
import stoics from '../../db/stoics'
import images from '../../db/images'

const index = () => {
  return <Home stoics={stoics.stoics} images={images.images}/>;
};

export default index;
