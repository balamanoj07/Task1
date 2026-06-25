let container = document.getElementById("container");

fetch("https://dummyjson.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{

    data.users.forEach((user)=>{

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${user.image}" alt="user">
            
            <h3>${user.firstName} ${user.lastName}</h3>

            <p><strong>ID:</strong> ${user.id}</p>

            <p><strong>Email:</strong> ${user.email}</p>

            <p><strong>Phone:</strong> ${user.phone}</p>

            <p><strong>Age:</strong> ${user.age}</p>

            <p><strong>City:</strong> ${user.address.city}</p>

            <p><strong>University:</strong> ${user.university}</p>
        `;

        container.appendChild(card);

    });

})
.catch((error)=>{
    console.log("Error :", error);
});