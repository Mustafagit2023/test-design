const panoramaImage1 = new PANOLENS.ImagePanorama("assets/img360_1.jpg");
const panoramaImage2 = new PANOLENS.ImagePanorama("assets/img360_2.jpg");
const panoramaImage3 = new PANOLENS.ImagePanorama("assets/img360_3.jpg");
const imageContainer1 = document.querySelector(".image-container1");
const imageContainer2 = document.querySelector(".image-container2");
const imageContainer3 = document.querySelector(".image-container3");

const viewer1 = new PANOLENS.Viewer({
    container: imageContainer1,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: false,
});

viewer1.add(panoramaImage1);
const viewer2 = new PANOLENS.Viewer({
    container: imageContainer2,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: false,
});

viewer2.add(panoramaImage2);
const viewer3 = new PANOLENS.Viewer({
    container: imageContainer3,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: false,
});

viewer3.add(panoramaImage3);