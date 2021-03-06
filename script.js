let div_disconnected = document.getElementById("disconnected");
let fetchData;

document.addEventListener("DOMContentLoaded", function () {

    if (navigator.onLine) {
        console.log("online");
        div_disconnected.classList.add("d-none");

        fetchData = fetch("https://quirky-kirch-74f858.netlify.app/GalleryRepo/images.json")
            .then((response) => response.json())
            .then((data) => localforage.setItem("data", data))
            .catch((err) => console.log(err));

    } else {
        console.log("offline");
        div_disconnected.classList.remove("d-none");
        fetchData = localforage.getItem("data");
    }

    fetchData.then((json) => displayImages(json));

    window.addEventListener("online", function (e) {
        console.log("change online");
        div_disconnected.classList.add("d-none");
    });

    window.addEventListener("offline", function (e) {
        console.log("change offline");
        div_disconnected.classList.remove("d-none");
    });
});


function displayImages(images) {
    let div_main = document.getElementById("main");

            let container = document.createElement("div");
            container.classList.add("container", "mt-5", "mb-3");

            let row = document.createElement("div");
            row.classList.add("row");

            images.forEach(function (image, i) {
                let div_image = document.createElement("div");
                div_image.classList.add("col-sm-6", "col-md-4", "col-lg-3", "p-2");

                let img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;
                img.title = image.title;
                img.classList.add("w-100", "on_hover_clickable");

                let div_fav = document.createElement("div");
                div_fav.classList.add("p-1");

                let span_fav = document.createElement("i");
                span_fav.id = "button"+i;
                span_fav.classList.add("far", "fa-heart");
                span_fav.addEventListener("click", function () {

                let photoId = i;
                let added = false;
                
                    if (this.getAttribute("class") === "far fa-heart") {
                        
                            fetch("http://localhost:3000/favoris", {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({photoId}),
                            }).then(res => {
                                return res.json();
                            }).then(data => {
                                favs = data;
                                let message = added ? "Favori ajouté" : "Favori enlevé";
                                sendNotif(message)
                            }) 

                        this.setAttribute("class", "fas fa-heart");

                    } else if (this.getAttribute("class") === "fas fa-heart") {

                        this.setAttribute("class", "far fa-heart");
                    }
                    
                });

                div_fav.appendChild(span_fav);
                div_image.appendChild(img);
                row.appendChild(div_image);
                row.appendChild(div_fav);
            });

            container.appendChild(row);
            div_main.appendChild(container);
}

function sendNotif(message) {
    if ('Notification' in window) {
        if (Notification.permission === "granted") {
            const notification = new Notification(message)
        } else if (Notification.requestPermission !== "denied"){
            Notification.requestPermission(permission => {
                if (permission === "granted") {
                    const notification = new Notification(message);
                }
            });
        }
    }
}

/*document.addEventListener("DOMContentLoaded", function () {
    fetch("https://quirky-kirch-74f858.netlify.app/GalleryRepo/images.json")
        .then(function (response) {
            return response.json();

        }).then(function (res) {
            console.log(res);

                       

            let images = res;

            let div_main = document.getElementById("main");

            let container = document.createElement("div");
            container.classList.add("container", "mt-5", "mb-3");

            let row = document.createElement("div");
            row.classList.add("row");

            images.forEach(function (image, i) {
                let div_image = document.createElement("div");
                div_image.classList.add("col-sm-6", "col-md-4", "col-lg-3", "p-2");

                let img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;
                img.title = image.title;
                img.classList.add("w-100", "on_hover_clickable");

                let div_fav = document.createElement("div");
                div_fav.classList.add("p-1");

                let span_fav = document.createElement("i");
                span_fav.id = "button"+i;
                span_fav.classList.add("far", "fa-heart");
                span_fav.addEventListener("click", function () {

                    if (this.getAttribute("class") === "far fa-heart") {
                        document.addEventListener("DOMContentLoaded", function () {
                            fetch("http://localhost:3000/")
                                .then(function (response2) {
                                    return response2.json();
                        
                                }).then(function (res2) {
                                    console.log(res2);
                                });
                          
                        });        

                        this.setAttribute("class", "fas fa-heart");

                    } else if (this.getAttribute("class") === "fas fa-heart") {

                        this.setAttribute("class", "far fa-heart");
                    }
                    
                });

                div_fav.appendChild(span_fav);
                div_image.appendChild(img);
                row.appendChild(div_image);
                row.appendChild(div_fav);
            });

            container.appendChild(row);
            div_main.appendChild(container);

        }).catch(function (err) {
            console.log(err);
        });
        
        if (navigator.onLine) {
            console.log("online");
        } else {
            console.log("offline");
        }
    
        window.addEventListener("online", function (e) {
            console.log("change online");
        });
    
        window.addEventListener("offline", function (e) {
            console.log("change offline");
        });

});*/


/*let div_main = document.getElementById("main");

let container = document.createElement("div");
container.classList.add("container", "mt-5", "mb-3");

let row = document.createElement("div");
row.classList.add("row");

let images = [
    {
        src: "images/image1.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image2.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image3.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image4.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image5.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image6.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image7.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image8.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image9.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image10.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image11.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image12.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image13.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image14.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image15.jpg",
        alt: "",
        description: "",
    },
    {
        src: "images/image16.jpg",
        alt: "",
        description: "",
    },
];

images.forEach(function (image) {
    let div_image = document.createElement("div");
    div_image.classList.add("col-sm-6", "col-md-4", "col-lg-3", "p-2");

    let img = document.createElement("img");
    img.src = image.src;
    img.classList.add("w-100", "on_hover_clickable");

    div_image.appendChild(img);
    row.appendChild(div_image);
});

container.appendChild(row);
div_main.appendChild(container);*/
