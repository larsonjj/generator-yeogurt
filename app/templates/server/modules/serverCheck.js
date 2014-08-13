/**
*   ServerCheck Script
*   Detects if code is running on Node server
*/

'use strict';

var ServerCheck = !(typeof window !== 'undefined' && window.document);

module.exports = ServerCheck;