// Function to load JSON file and update text
async function loadLanguage(language) {
  try {
    const response = await fetch(`languages/${language}.json`);
    const translations = await response.json();

    // Update text content based on the translations
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });
  } catch (error) {
    console.error('Error loading language file:', error);
  }
}

// Event listener for language selection
document.getElementById('language-select').addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  loadLanguage(selectedLanguage);
});

// Load default language (optional)
document.addEventListener('DOMContentLoaded', () => {
  const defaultLanguage = 'en'; // Set default language
  loadLanguage(defaultLanguage);
});
