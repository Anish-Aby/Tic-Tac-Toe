// div.grid.one
//


let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1}});

tl.to(".title-text", {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, opacity: 1, duration: 3})
tl.to(".buttons-container", { y: 0, opacity: 1, duration: 3}, 0)
tl.to(".grid", {'clip-path': 'circle(111.8% at 50% 0%)', opacity: 1, duration: 3}, 0)

