import React from 'react';
const ye=new Date();
let year =ye.getFullYear();

const Footer=()=>{
    return(
        <footer><p>Copyright &#169;  {year} </p></footer>
    );
}

export default Footer;