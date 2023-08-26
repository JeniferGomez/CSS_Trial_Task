document.addEventListener("DOMContentLoaded", function() {
    const videoContainers = document.querySelectorAll(".youtube-video");
    
    videoContainers.forEach(function(container) {
        const videoId = container.getAttribute("data-id");
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
        iframe.setAttribute("width", "560");
        iframe.setAttribute("height", "315");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        
        container.appendChild(iframe);
    });
});
