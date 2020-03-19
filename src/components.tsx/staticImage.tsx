import React, { useRef, useState, useEffect, CanvasHTMLAttributes } from "react";

interface staticImgPropsI {
  imglink?: string,
  alt?: string
}

const StaticImg = (props: staticImgPropsI) => {
  return <img className="staticImageComp" src={props.imglink} alt={props.alt} />
}

export default StaticImg;