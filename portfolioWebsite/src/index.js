const animate = ()=>{var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
    return animate;
}

export default animate;
