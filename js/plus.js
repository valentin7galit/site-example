function myFunction(imgs) {
	var expand_img = document.getElementById("expanded_img");
    expand_img.src = imgs.src;
    expand_img.parentElement.style.display = "block";
}