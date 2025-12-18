// Theme JavaScript

(function() {
  'use strict';
  
  // Initialize theme
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Theme loaded');
  });
  
  // Mobile menu toggle
  function toggleMobileMenu() {
    var nav = document.querySelector('.main-nav');
    if (nav) {
      nav.classList.toggle('is-active');
    }
  }
  
  // Add to cart functionality
  function handleAddToCart(event) {
    event.preventDefault();
    console.log('Item added to cart');
  }
  
  // Initialize event listeners
  var addToCartButtons = document.querySelectorAll('[name="add"]');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', handleAddToCart);
  });
})();
