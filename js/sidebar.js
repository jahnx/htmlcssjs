const sidebarMenuButton = document.querySelector('.global-header-menu-icon')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

const toggleSidebar = () => {
  sidebar.classList.toggle('is-active')
  overlay.classList.toggle('is-active')
}

const closeSidebar = () => {
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', toggleSidebar)
overlay.addEventListener('click', closeSidebar)
