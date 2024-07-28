// Exported functions

export const colorChange = (elementClass, headerClass) => {
    if (elementClass === 'header') {
        // add className header color to the header
        console.log("The color should change!")
        document.querySelector('.header').classList.add('.header_class');
    }
};

// src/utils.js

export const changeStyles = (styles, setStyles) => {
    setStyles((prevStyles) => ({
        ...prevStyles,
        ...styles,
    }));
};
