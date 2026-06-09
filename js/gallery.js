document.querySelectorAll(".gallery-container").forEach(gallery =>
{
    const galleryImage = gallery.querySelector(".gallery-image");
    const galleryLink = gallery.querySelector(".gallery-link");

    gallery.querySelectorAll(".thumbnail").forEach(thumbnail =>
    {
        thumbnail.addEventListener("mousedown", (event) =>
        {
            if (event.ctrlKey || event.button === 1)
            {
                window.open(thumbnail.src, "_blank");
                return;
            }

            if (event.button === 0)
            {
                galleryImage.src = thumbnail.src;
                galleryLink.href = thumbnail.src;
            }
        });
    });
});