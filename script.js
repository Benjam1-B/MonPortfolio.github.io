const handleMousePos = (e) => {
  const CURSOR = document.querySelector('#mouse-cursor');
  const HOVER = document.querySelectorAll('.cursor-hover');
  const { pageX: posX, pageY: posY } = e;

  const runMouseOver = () => {
    CURSOR.style.transform = 'scale(3)';
    CURSOR.style.background = '#ffffff';
  };
  HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

  const runMouseLeave = () => {
    CURSOR.style.transform = '';
    CURSOR.style.background = '';
  };
  HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
  
  return (
    CURSOR.style.left = `${posX - 12}px`,
    CURSOR.style.top = `${posY - 12}px`  
  );
};
document.addEventListener('mousemove', handleMousePos);