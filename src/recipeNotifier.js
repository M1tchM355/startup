const RecipeEvent = {
    System: 'system',
    New: 'recipeNew'
  };
  
  class EventMessage {
    constructor(from, type, value) {
      this.from = from;
      this.type = type;
      this.value = value;
    }
  }
  
  class RecipeEventNotifier {
    events = [];
    handlers = [];
  
    constructor() {
      // const notification = document.createElement('div');
      // notification.className = 'test';
      // notification.innerText = 'test';
      // document.body.appendChild(notification);
      let port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      this.socket.onopen = (event) => {
        this.receiveEvent(new EventMessage('Startup', RecipeEvent.System, { msg: 'connected' }));
      };
      this.socket.onclose = (event) => {
        this.receiveEvent(new EventMessage('Startup', RecipeEvent.System, { msg: 'disconnected' }));
      };
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
        } catch {}
      };
    }
  
    broadcastEvent(from, type, value) {
      const event = new EventMessage(from, type, value);
      this.socket.send(JSON.stringify(event));
    }

    receiveEvent(event) {
      this.events.push(event);

      if (event.type === RecipeEvent.New) {
        this.showNotification(event.from, 'created a new recipe!');
      }
    }

    showNotification(from, message) {
      const notification = document.createElement('div');
      notification.className = 'notification-popup';
      notification.innerText = `${from} ${message}`;
      document.body.appendChild(notification);
  
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 5000); // Notification disappears after 5 seconds
    }
  }
  
  const RecipeNotifier = new RecipeEventNotifier();
  export { RecipeEvent, RecipeNotifier };
  