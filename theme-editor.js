// Shopify Theme Editor Events
document.addEventListener('shopify:section:load', (event) => {
  // Reinitialize components when section is loaded
  const sectionId = event.detail.sectionId;
  console.log('Section loaded:', sectionId);
  
  // Re-initialize carousels if present
  if (window.initCarousel) {
    initCarousel('merchTrack', 'merchPrev', 'merchNext');
    initCarousel('serviceTrack', 'servicePrev', 'serviceNext');
    initCarousel('presetTrack', 'presetPrev', 'presetNext');
  }
});

document.addEventListener('shopify:section:unload', (event) => {
  const sectionId = event.detail.sectionId;
  console.log('Section unloaded:', sectionId);
  
  // Clean up section-specific resources
  document.querySelectorAll(`[data-section="${sectionId}"]`).forEach((element) => {
    element.remove();
  });
});

document.addEventListener('shopify:section:select', (event) => {
  const sectionId = event.detail.sectionId;
  console.log('Section selected:', sectionId);
});

document.addEventListener('shopify:section:deselect', (event) => {
  const sectionId = event.detail.sectionId;
  console.log('Section deselected:', sectionId);
});

document.addEventListener('shopify:block:select', (event) => {
  const blockId = event.detail.blockId;
  console.log('Block selected:', blockId);
});

document.addEventListener('shopify:block:deselect', (event) => {
  const blockId = event.detail.blockId;
  console.log('Block deselected:', blockId);
});

// Prevent modal issues during editor interactions
document.addEventListener('shopify:inspector:activate', () => {
  document.querySelectorAll('[role="dialog"]').forEach((modal) => {
    modal.setAttribute('data-inspector-active', 'true');
  });
});

document.addEventListener('shopify:inspector:deactivate', () => {
  document.querySelectorAll('[data-inspector-active="true"]').forEach((modal) => {
    modal.removeAttribute('data-inspector-active');
  });
});
