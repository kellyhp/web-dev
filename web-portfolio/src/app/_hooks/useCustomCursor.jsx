import { useEffect } from "react";

export default function useCustomCursor() {
  useEffect(() => {
    const $dot = document.querySelector('.cursor-dot');
    const $outline = document.querySelector('.cursor-dot-outline');

    const cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot,
      $outline,

      init() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
      },
      
      setupEventListeners() {
        const self = this;

        // Anchor hovering
        document.querySelectorAll('a').forEach(el => {
          el.addEventListener('mouseover', () => {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', () => {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        // Click events
        document.addEventListener('mousedown', () => {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', () => {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });

        // Mouse movement
        document.addEventListener('mousemove', e => {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = `${self.endY}px`;
          self.$dot.style.left = `${self.endX}px`;
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', () => {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
        });

        document.addEventListener('mouseleave', () => {
          self.cursorVisible = false;
          self.toggleCursorVisibility();
        });
      },

      animateDotOutline() {
        const self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = `${self._y}px`;
        self.$outline.style.left = `${self._x}px`;

        requestAnimationFrame(self.animateDotOutline.bind(self));
      },

      toggleCursorSize() {
        const self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },

      toggleCursorVisibility() {
        const self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      }
    };

    cursor.init();

    return () => {
      // Cleanup event listeners if necessary
    };
  }, []);
}
