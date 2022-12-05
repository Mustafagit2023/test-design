'use strict';
const header = document.querySelector('header');
// Dynamic Header
const headerText = `
<div class="container">
        <a href="index.html">
          <img
            class="logo"
            src="assets/Images/Logo.jpg"
            alt="Logo"
            title="Aldaar Albayda"
          />
        </a>
        <nav class="nav">
          <ul id="menu">
            <li><a class="link" href="View-360.html">See 360&deg;</a></li>
            <li>
              <a class="link" href="Latest-News.html">Latest News</a>
            </li>
            <li>
              <a class="link" href="Our-Designs.html">Our Designs</a>
            </li>
            <li>
              <a href="Contact-Us.html" class="contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <!-- <i class="fas fa-bars menu-icon"></i> -->
        <i class="fa-solid fa-bars-staggered menu-icon"></i>
      </div>
`;
header.insertAdjacentHTML('beforeend', headerText);