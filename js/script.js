document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 关闭移动菜单
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 导航栏滚动效果
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('py-2', 'shadow-lg');
        header.classList.remove('py-3', 'shadow-md');
      } else {
        header.classList.add('py-3', 'shadow-md');
        header.classList.remove('py-2', 'shadow-lg');
      }
    }
  });
  
  // 元素进入视口时的动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.float-animation').forEach(el => {
    el.classList.add('opacity-0', 'transition-all', 'duration-500');
    observer.observe(el);
  });
});    