'use strict';
const footer = document.querySelector('footer');
// Dynamic Footer
const footerText = `
<div class="container grid-3">
        <div class="highlight">
        <a href="index.html">
        <img class="logo" src="assets/Images/Logo.jpg" alt="" />
        
        </a>
          <p><span>Aldaar Albayda</span> For Architecture Design</p>
        </div>
        <div class="contact-info">
          <h3>Contact Information</h3>
          <div>
            <i class="fas fa-location-arrow"></i>
            <!-- <p>Jordan - Amman - Mecca st.</p> -->
            <a href="https://goo.gl/maps/KvxgdZ3LLR7FdMv49" target="_blank"
              >Jordan - Amman - Mecca st.</a
            >
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <!-- <p>+962777999988</p> -->
            <a href="tel: +962777999988">+962777999988</a>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto: CompanyEmail@gmail.com">CompanyEmail@gmail.com</a>
            <!-- <p>CompanyEmail@gmail.com</p> -->
          </div>
        </div>
        <div class="social">
          <h3>Follow us</h3>
          <div>
            <a
              href="https://web.facebook.com/Aldaar.Albayda.2019?_rdc=1&_rdr"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/aldaar_albayda_jo/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR3AlqqAbIw0aXeHBBoJJDja9z1ZdtU85kxGoKwxVVtsAwgJOOvxXnaquyU"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/aldaar-albayda-company/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2022 Aldaar Albayda | All rights reserved
      </div>
`;
footer.insertAdjacentHTML('beforeend', footerText);