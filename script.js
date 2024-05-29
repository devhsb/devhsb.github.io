function scrollNext(){
        document.querySelector(".cards").scrollBy(450, 0);
    }
    function scrollPrev(){
        document.querySelector(".cards").scrollBy(-450, 0);
    }   
    
// Android Projects Scroll
    function scrollNextAnd(){
        document.querySelector(".android-cards").scrollBy(450, 0);

    }

    function scrollPrevAnd(){
        document.querySelector(".android-cards").scrollBy(-450, 0);
        
    }

//scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const elements = document.querySelectorAll(".hide");
elements.forEach((el) => observer.observe(el));


//Skills animate
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const words = ["Java", "Kotlin", "Android"];
let interval = null;
let wordIndex = 0;

const animate = () => {
  let iteration = 0;
  const target = document.querySelector(".skill_typing");
  
  target.innerHTML = words[wordIndex]
  target.dataset.value = words[wordIndex];
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    target.innerHTML = target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return `<span style="color: #009e66;">${target.dataset.value[index]}</span>`;
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= target.dataset.value.length){ 
      clearInterval(interval);
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(animate, 1500);

    }
    
    iteration += 1 / 3;
  }, 70);
}

animate();
