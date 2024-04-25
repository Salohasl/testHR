let posts = [];
let sortDirection = {
    'id': 'asc',
    'title': 'asc',
    'body': 'asc'
};

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            posts = data;
            displayPosts(posts);
        })
        .catch(error => console.error('Ошибка:', error));
}

function displayPosts(posts) {
    const tbody = document.getElementById('postsTable').querySelector('tbody');
    tbody.innerHTML = '';
    posts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        `;
        tbody.appendChild(row);
    });
}

//функция сортировки
function sortTable(columnKey) {
    const direction = sortDirection[columnKey] === 'asc' ? 'desc' : 'asc';
    sortDirection[columnKey] = direction;
    posts.sort((a, b) => {
        if (a[columnKey] < b[columnKey]) {
            return direction === 'asc' ? -1 : 1;
        }
        if (a[columnKey] > b[columnKey]) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    });
    
    displayPosts(posts);
}

//функция поиска
function filterTable() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchValue) || post.body.toLowerCase().includes(searchValue);
    });
    displayPosts(filteredPosts);
    
}

fetchPosts();