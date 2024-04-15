function typing() { // thanks Hyperplexed for code explanation
    const phrases = ["confused.jpg", "a student", "a tech enthusiast", "learning", "having fun (send help)", "reading Stack Overflow", "breaking code", "improving", "engaging in silly activities"];
    const main = document.querySelector("#nice-text")
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text = main.textContent;

    const intervalId = window.setInterval(() => {
        let iterations = 0;
        const interval = window.setInterval(() => {
            main.textContent = text.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return text[index];
                }
                
                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");

            if (iterations >= text.length) clearInterval(interval);

            iterations += 1 / 3;
        }, 30);
        oldText = text;
        while (oldText == text) {
            text = phrases[(Math.random() * phrases.length) | 0];
        }
    }, 5000);
}

typing();

function follow(event) {
  let width = window.innerWidth, height = window.innerHeight;
  let blob = document.getElementById("blob");
  
  blob.style.transform = `translate(${event.clientX - 150}px, ${event.clientY - 150}px)`;
  
  let g = (event.clientX / width) * 255;
  let b = (event.clientY / height) * 255;
  
  blob.style.backgroundColor = `rgb(${b}, ${g}, ${b})`;
}

document.addEventListener("mousemove", follow);