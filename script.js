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

/*(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('BKcXq_CegrvDvp6gt');
})();
 
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}*/