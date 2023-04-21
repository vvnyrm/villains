function renderItems(collection) {
    console.log("Comic Book Villains", collection);
    collection.forEach(function(item) {
        console.log(item.Name);
    });

collection.forEach(function(item) {

        const listItem = document.createElement('div');
        listItem.classList.add("villains");

        const villainName = document.createElement('h3');
        villainName.innerHTML = item.Name;
        listItem.appendChild(villainName);

        const source = document.createElement('h4');
        source.innerHTML = item.Origin;
        listItem.appendChild(source);

        const itemDetails = `
            <img src="${item.image}"/>
            <p>Name: ${item.Name}</p>
            <p>Origin: ${item.Origin}</p>
            <p>First Appearance: ${item.Appearance}</p>
        `;
        listItem.insertAdjacentHTML('beforeend', itemDetails);
  
        if (item.Universe == "Marvel") {
            listItem.classList.add('marvelcomics');
        }

        if (item.Universe == "DC") {
            listItem.classList.add('dccomics');
        }

        var collectionList = document.querySelector('.collection');
        collectionList.appendChild(listItem);
    })
    };


fetch('newdata.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(collection) {
        renderItems(collection.reverse());
    });
