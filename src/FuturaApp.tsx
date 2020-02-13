import React, { useState, useEffect, Fragment } from 'react';
import { motion } from "framer-motion"

import './FuturaApp.css';

function FuturaApp(props) {
  return (
    <Fragment>
      <Test />
    </Fragment>
    
  );
}

function Test(props) {
  return (
    <motion.div animate={{ scale: 0.5 }} />
  );
}

export default FuturaApp;
