import ScrollTrigger from '@terwanerik/scrolltrigger'

window.addEventListener('load', () => {
  const scrolltrigger = new ScrollTrigger();
  scrolltrigger.add('[data-trigger]', {
    offset: {
      element: {
        x: 0,
        y: 0
      },
      viewport: {
        x: 0,
        y: (trigger, frame, direction) => {
          return trigger.visible ? 0 : 0.5
        }
      }
    }
  });
});
