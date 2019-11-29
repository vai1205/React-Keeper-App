import React from 'react'
function footer (){
    const currentYear = new Date().getFullYear()
    return(
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    )
}
export default footer