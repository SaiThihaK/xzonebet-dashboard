const {
  REACT_APP_textColor,
  REACT_APP_bgColor,
  REACT_APP_mainColor,
  REACT_APP_secondaryColor,
  REACT_APP_backgroundColor,
  REACT_APP_liveHeader,
  REACT_APP_secondaryHover,
} = process.env;

var root = document.querySelector(":root");
root.style.setProperty("--text-color", REACT_APP_textColor);
root.style.setProperty("--bg-color", REACT_APP_bgColor);
root.style.setProperty("--main-color", REACT_APP_mainColor);
root.style.setProperty("--secondary-color", REACT_APP_secondaryColor);
root.style.setProperty("--background-color", REACT_APP_backgroundColor);
root.style.setProperty("--live-header", REACT_APP_liveHeader);
root.style.setProperty("--secondary-hover", REACT_APP_secondary - hover);
