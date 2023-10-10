const userList = document.querySelector('#user-list');
    function renderUser(doc) {
        const li = document.createElement('li');
        const name = document.createElement('span');
        const email = document.createElement('span');

        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name; 
        email.textContent = doc.data().email;

        li.appendChild(name);
        li.appendChild(email);

        userList.appendChild(li);
    }
    db.collection('information').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderUser(doc);
        })
    })