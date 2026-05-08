document.addEventListener('DOMContentLoaded', function() {
    
    const menuBtn = document.getElementById('btnMenu');
    const closeBtn = document.getElementById('btnClose');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
});