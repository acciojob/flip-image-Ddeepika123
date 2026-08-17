// write js code if required
const image = document.getElementById("flip");

        image.addEventListener("mouseover", function () {
            image.src =
                "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg";
        });

        image.addEventListener("mouseout", function () {
            image.src =
                "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg";
        });