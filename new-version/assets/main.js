
    window.onload = function() {
        // Create the badge element
        var badge = document.createElement('div');
        badge.innerText = 'Note: This portfolio is currently being updated and may not yet reflect all recent projects and achievements.';
        
        // Style the badge
        badge.style.position = 'fixed';
        badge.style.bottom = '0';
        badge.style.left = '0';
        badge.style.width = '100%';
        badge.style.backgroundColor = 'red';
        badge.style.color = 'white';
        badge.style.textAlign = 'center';
        badge.style.fontSize = '16px';
        badge.style.padding = '10px 0';
        badge.style.zIndex = '9999'; // Ensure it's on top of other content

        // Append the badge to the body
        document.body.appendChild(badge);
    }
