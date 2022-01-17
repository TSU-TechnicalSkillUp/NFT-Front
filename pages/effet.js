const vantaEffect = (elementRef) => {
  return window.VANTA.BIRD({
    el: elementRef,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    THREE,
  });
};

export default vantaEffect;
