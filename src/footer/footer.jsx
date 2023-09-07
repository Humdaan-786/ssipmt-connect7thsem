import React from "react";

function Footer()
{
    const year = new Date().getFullYear();
    return(
    
        <footer>
        Create by Humdaan in year: {year}
        </footer>
   );
}
export default Footer