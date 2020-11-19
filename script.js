document.addEventListener("DOMContentLoaded", function () {
    fetch("https://quirky-kirch-74f858.netlify.app/GalleryRepo/images.json")
        .then(function (response) {
            return response.json();

        }).then(function (res) {
            console.log(res);
            
            if(navigator.online){
                console.log("online");
            };

            let images = res;

            let div_main = document.getElementById("main");

            let container = document.createElement("div");
            container.classList.add("container", "mt-5", "mb-3");

            let row = document.createElement("div");
            row.classList.add("row");

            images.forEach(function (image) {
                let div_image = document.createElement("div");
                div_image.classList.add("col-sm-6", "col-md-4", "col-lg-3", "p-2");

                let img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;
                img.title = image.title;
                img.classList.add("w-100", "on_hover_clickable");

                div_image.appendChild(img);
                row.appendChild(div_image);
            });

            container.appendChild(row);
            div_main.appendChild(container);

        }).catch(function (err) {
            console.log(err);
        });
});


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
