function filterProjects(category, updateURL = false) {
  const entries = document.querySelectorAll('.directory-entry');

  entries.forEach(entry => {
    if (category === 'all') {
      entry.style.display = 'grid';
    } else {
      if (entry.classList.contains(category)) {
        entry.style.display = 'grid';
      } else {
        entry.style.display = 'none';
      }
    }
  });

  // Update active state of filter buttons
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(button => {
    const buttonCategory = button.textContent.toLowerCase().replace(/\s+/g, '').replace('/', '');
    if (buttonCategory === category) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  if (updateURL) {
    const newURL = category === 'all' ? window.location.pathname : `${window.location.pathname}?category=${category}`;
    history.pushState(null, '', newURL);
  }
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (category) {
    filterProjects(category);
  } else {
    filterProjects('all');
  }
};
