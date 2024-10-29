const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    // Save user preference in localStorage
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});
