function filterPdfs() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let pdfs = document.getElementsByClassName('pdf-item');
  for (let i = 0; i < pdfs.length; i++) {
    let text = pdfs[i].innerText.toLowerCase();
    pdfs[i].style.display = text.includes(input) ? '' : 'none';
  }
}

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// serach box toggle and  functionality 

document.getElementById("search-btn").addEventListener("click", () => {
  const searchBox = document.getElementById("search-box");
  searchBox.style.display =
    searchBox.style.display === "flex" ? "none" : "flex";
});

// Search functionality
document.getElementById("do-search").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.toLowerCase();

  if (query.includes("book")) {
    document.getElementById("books").scrollIntoView({ behavior: "smooth" });
  } else if (query.includes("note")) {
    document.getElementById("notes").scrollIntoView({ behavior: "smooth" });
  } else if (query.includes("syllabus")) {
    document.getElementById("syllabus").scrollIntoView({ behavior: "smooth" });
  } else if (query.includes("faq")) {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
  } else {
    alert("No results found! Try 'books', 'notes', 'syllabus', or 'faq'.");
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // 1. Toggle Mobile Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// AVOID THIS: It forces the page to reload index.html over and over
window.location.href = "index.html";
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('nav-search-input');
    const searchContainer = document.getElementById('search-trigger');

    // 1. Listen for the '/' key shortcut
    window.addEventListener('keydown', (e) => {
        if (e.key === "/" && document.activeElement !== searchInput) {
            e.preventDefault(); // Don't type the slash
            searchInput.focus();
        }
    });

    // 2. Handle Search on 'Enter'
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value;
            if (query) {
                console.log("Searching for:", query);
                // Here you can redirect to your search results or library
                // window.location.href = `library.html?q=${query}`;
            }
        }
    });

    // 3. Keep it expanded if there is text inside
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length > 0) {
            searchContainer.classList.add('border-blue-500');
        }
    });
});
/**
 * Handles the switching between semesters
 * @param {number} semNumber - The semester number selected
 */
function switchSemester(semNumber) {
    // 1. Get all tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    
    // 2. Loop through tabs to update the UI
    tabs.forEach(tab => {
        // Remove active class from everyone
        tab.classList.remove('tab-active');
        
        // Add active class back to the clicked button
        // We check if the button text contains the semester number
        if(tab.innerText.includes(semNumber)) {
            tab.classList.add('tab-active');
        }
    });

    // 3. Logic for filtering content
    console.log("Loading content for Semester: " + semNumber);
    
    /* Note: In a full project, you would either:
       a) Hide/Show different subject-grid divs
       b) Fetch data from an API and update the subject-grid innerHTML
    */
}

// Optional: Auto-load Semester 1 UI on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Library initialized.");
});
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Simple Subject Search
    const searchInput = document.getElementById('subjectSearch');
    const cards = document.querySelectorAll('.syllabus-card');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            
            cards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                if (title.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    console.log("Syllabus logic loaded successfully.");
});document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. PYQ Year Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pyqCards = document.querySelectorAll('.pyq-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and add to clicked
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            pyqCards.forEach(card => {
                const cardYear = card.getAttribute('data-year');
                
                if (filterValue === 'all' || cardYear === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
function switchSemester(semNumber) {
    // Update Tab UI
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('tab-active');
        if (tab.innerText.includes(semNumber)) {
            tab.classList.add('tab-active');
        }
    });

    // Filter Cards
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach(card => {
        if (card.getAttribute('data-semester') == semNumber) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    switchSemester(1);
});
function switchSemester(semNumber) {
    // 1. Update Buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('tab-active');
        if (tab.innerText.includes(semNumber)) {
            tab.classList.add('tab-active');
        }
    });

    // 2. Filter Content Cards
    const cards = document.querySelectorAll('[data-semester]');
    cards.forEach(card => {
        if (card.getAttribute('data-semester') == semNumber) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    // 3. Smooth scroll back to top of the content
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial state
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('semester-tabs')) {
        switchSemester(1);
    }
});