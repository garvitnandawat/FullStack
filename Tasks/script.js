// src/script.js
document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())  
      .then(users => {
        users.forEach(user => {
          const li = document.createElement("li");
          li.innerHTML = `
            <strong>Name:</strong> ${user.name} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Address:</strong> ${user.address.street}, ${user.address.city}
          `;
          userList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        userList.innerHTML = `<li>Error fetching user data</li>`;
      });
  });
  