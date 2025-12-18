// Pub/Sub event system for theme
const PubSub = {
  events: {},

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },

  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  },

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  },

  publishAsync(event, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.publish(event, data);
        resolve();
      }, 0);
    });
  }
};

// Make available globally
window.PubSub = PubSub;
