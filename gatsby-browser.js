//-----------------------------------------------------------------------------
// gatsby-browser.js
//-----------------------------------------------------------------------------

/** 
 * 10/18/2018
 * Import the bootstrap javascript. Added it here to fix issue with
 * ```gatsby build``` failed with weird error
 */
import 'bootstrap'

///////////////////////////////////////////////////////////////////////////////
// TODO: 09/26/2018
// -  ADDED THE PRISMJS LIBRARY FOR CODE FORMATTING IN THE MARKDOWN. NOT 
//    SURE IF THIS IS OVERKILL AS I AM USING BOOTSTRAP FOR STYLING THE CODE.
// -  LOOK INTO SETTING THE <pre> and <code> STYLES IN SCSS TO OVERRIDE THE
//    BOOTSTRAP DEFAULTS AS THOSE AREN'T WORKING VERY WELL.
///////////////////////////////////////////////////////////////////////////////

// PrimJS Style for code blocks
require("prismjs/themes/prism-solarizedlight.css")

