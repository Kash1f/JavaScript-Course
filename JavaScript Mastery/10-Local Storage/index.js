const button = document.getElementById('click-button');
const userName = document.getElementById('username');

button.addEventListener('click', () => {{
    const value = userName.value;
    localStorage.setItem('name', value);
    alert('Name saved');
}});
