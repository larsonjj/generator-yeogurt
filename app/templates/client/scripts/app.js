/**
*   Application Logic
*/

'use strict';<% if (jsFramework === 'backbone') { %>

// Create global namespaces for Models, Collections, and Views
window.<%= _.classify(projectName) %> = {
    init: function () {
        console.log('Welcome to Yeogurt');
    }
};

$(document).ready(function () {
    <%= _.classify(projectName) %>.init();
});
<% } else { %>
console.log('Welcome to Yeogurt');<% } %>
