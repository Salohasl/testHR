function fetchPostsAndDisplay() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // Создаем элементы таблицы
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            // Заголовок таблицы
            const headerRow = document.createElement('tr');
            ['Id', 'Title', 'Body'].forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            // Строки таблицы
            posts.forEach(post => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                `;
                tbody.appendChild(row);
            });

            table.appendChild(thead);
            table.appendChild(tbody);

            document.body.appendChild(table);
        })
        .catch(error => console.error('Ошибка при получении данных:', error)); //в случае ошибки
}

fetchPostsAndDisplay();