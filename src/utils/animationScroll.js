const animation = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animation');
        }
    });

}
export const observer = new IntersectionObserver( animation, {
    threshold: 0.5
});