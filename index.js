document.addEventListener('DOMContentLoaded', function() {
    const floatingObjects = document.querySelectorAll('.floating-object');
    
    floatingObjects.forEach((obj, index) => {

        const randomRotateX = Math.random() * 360;
        const randomRotateY = Math.random() * 360;
        
        obj.style.setProperty('--rotate-x', randomRotateX + 'deg');
        obj.style.setProperty('--rotate-y', randomRotateY + 'deg');
        

        setInterval(() => {
            const newX = Math.random() * 100;
            const newY = Math.random() * 100;
            obj.style.left = newX + '%';
            obj.style.top = newY + '%';
        }, 10000 + (index * 2000));
    });
    

    const profileIcon = document.getElementById('profileIcon');
    profileIcon.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotateY(360deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 600);
    });
    

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingObjects.forEach((obj, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            obj.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
});