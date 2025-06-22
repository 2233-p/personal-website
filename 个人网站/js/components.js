// 加载头部组件
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;
  });

// 加载侧边栏组件
fetch('components/sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  });

// 加载主页内容组件
fetch('components/home.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('home').innerHTML = data;
  });

// 加载关于我内容组件
fetch('components/about.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('about').innerHTML = data;
  });

// 加载爱好内容组件
fetch('components/hobbies.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('hobbies').innerHTML = data;
  });

// 加载页脚组件
fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-footer').innerHTML = data;
  });    