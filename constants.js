// Constants for Shopify theme
const THEME_CONSTANTS = {
  CART_API: '/cart.js',
  PRODUCTS_API: '/products.json',
  SHOP_API_LIMIT: 250,
  BREAKPOINTS: {
    mobile: 480,
    tablet: 768,
    desktop: 1024
  },
  TRANSITION_DURATION: 300,
  ANIMATION_DURATION: 500
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = THEME_CONSTANTS;
}
