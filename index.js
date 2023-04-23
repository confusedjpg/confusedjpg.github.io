function nggyu() {
    let f = 0, s = 30, i = 1;
    const text = "We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it (say it) Inside, we both know what's been going on (going on) We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it (to say it) Inside, we both know what's been going on (going on) We know the game and we're gonna play it I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt youNever gonna give you up, never gonna let you down"
    intervalId = window.setInterval(function(){
        document.title = text.substring(f,Math.min(text.length,s));
        document.querySelector("link[rel=icon]").href = `assets/nggyu-frames/${i}.gif`;
        f++;
        s++;
        i++;
        if (i > 23) {i = 1;}
        if (f>=text.length) {f=0;s=30}
    },110);
}

nggyu();

function typing() { // thanks Hyperplexed for code explanation
    const phrases = ["confused.jpg", "a student", "a tech enthusiast", "a developer", "learning", "having fun", "deleting System32", "reading Stack Overflow", "trying", "rm -rf /*", "fixing code", "breaking code", "coding at 3 A.M", "(not) serious", "dumb"];
    const main = document.querySelector("main span")
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
            text = phrases[(Math.random() * phrases.length) | 0] + ".";
        }
    }, 5000);
}

typing();

function follow(event) {
    let width = window.innerWidth, height = window.innerHeight;
    let blob = document.getElementById("blob");
    
    blob.style.top = `${event.clientY}px`;
    blob.style.left = `${event.clientX}px`;
    
    let g = (event.clientX / width) * 255;
    let b = (event.clientY / height) * 255;
    
    blob.style.backgroundColor = `rgb(${b}, ${g}, ${b})`;
  }
  
document.addEventListener("mousemove", follow);