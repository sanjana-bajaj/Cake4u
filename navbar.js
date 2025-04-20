// document.addEventListener('DOMContentLoaded', () => {
//     fetch('navbar.html')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch navbar');
//         }
//         return response.text();
//       })
//       .then(data => {
//         document.getElementById('top-navbar').innerHTML = data;
//       })
//       .catch(error => console.error('Error loading navbar:', error));
// });

document.addEventListener('DOMContentLoaded', () => {
    // Attempt to fetch navbar.html
    fetch('navbar.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch navbar');
        }
        return response.text();
      })
      .then(data => {
        // If the fetch is successful, insert the navbar into the page
        document.getElementById('top-navbar').innerHTML = data;
      })
      .catch(error => {
        // If fetch fails, use hardcoded navbar HTML as a fallback
        console.error('Error loading navbar:', error);
        document.getElementById('top-navbar').innerHTML = `
          <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
              <i class="fas fa-bars"></i>
            </label>
            <label class="logo">Cake4u</label>
            <ul>
              <li><a href="/home.html">Home</a></li>
              <li><a href="/aboutUs.html">About Us</a></li>
              <li><a href="/menu.html">Menu</a></li>
              <li><a href="/services.html">Services</a></li>
              <li><a href="/contactUs.html">Contact Us</a></li>
            </ul>
          </nav>
        `;
      });
  });
  