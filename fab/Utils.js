import {Dimensions, Platform, TouchableOpacity, TouchableNativeFeedback} from "react-native";

export const shadeColor = (color, percent) => {
    let R;
    let G;
    let B;
  
    if (color.indexOf('rgb') === 0) {
      [R, G, B] = color.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
    } else {
      R = parseInt(color.substring(1, 3), 16);
      G = parseInt(color.substring(3, 5), 16);
      B = parseInt(color.substring(5, 7), 16);
    }
  
    R = parseInt((R * (100 + percent)) / 100, 0); // eslint-disable-line
    G = parseInt((G * (100 + percent)) / 100, 0); // eslint-disable-line
    B = parseInt((B * (100 + percent)) / 100, 0); // eslint-disable-line
  
    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;
  
    const RR =
      R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
    const GG =
      G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
    const BB =
      B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);
  
    return `#${RR}${GG}${BB}`;
};

export const isIphoneX = ()=> {
    const dimension = Dimensions.get("window");
  
    return (
      Platform.OS === "ios" &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (dimension.height === 812 || dimension.width === 812)
    );
};

export const getTouchableComponent = (useNativeFeedback = true) => {
    if (useNativeFeedback === true && Platform.OS === "android") {
        return TouchableNativeFeedback;
    }
    return TouchableOpacity;
};


export const getRippleProps = (color, useNativeFeedback = true) =>{
    // less than API 21 don't support Ripple
    if (
      useNativeFeedback === true &&
      Platform.OS === "android" &&
      Platform.Version >= 21
    ) {
      return {
        background: TouchableNativeFeedback.Ripple(shadeColor(color, -30), true)
      };
    }
    return {};
  }