!function(){console.log(galleryItems);var n=document.querySelector(".gallery"),a=(document.querySelector("body"),function(n){return n.map((function(n){var a=n.preview,t=n.original,e=n.description;return'<a class="gallery__link" href="'.concat(t,'">\n        <img\n          class="gallery__image"\n          src="').concat(a,'"\n          data-source="').concat(t,'"\n          alt="').concat(e,'"\n        />\n      </a>')})).join("")}(galleryItems));n.insertAdjacentHTML("afterbegin",a);new SimpleLightbox(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}();
//# sourceMappingURL=01-gallery.73c30ee4.js.map
