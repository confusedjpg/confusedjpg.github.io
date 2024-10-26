function randint(max) {
    return Math.floor(Math.random() * max);
}

function refreshlink() {
    const data = [
        ["the Dogger Bank Incident was easily avoidable, and almost led to more conflict..", "https://en.wikipedia.org/wiki/Dogger_Bank_incident"],
        ["the answers in this StackExchange post have been submitted 44 seconds apart! (and have the same vote count)", "https://gaming.meta.stackexchange.com/questions/12638/is-the-time-stamp-for-posted-answers-actually-accurate-to-the-millisecond"],
        ["a pizza can be cut in very interesting ways and still be equally shared between 2 people.", "https://en.wikipedia.org/wiki/Pizza_theorem"],
        ["<i>xkcd</i> creator <i>Randall Munroe</i> has books with serious answers to absurd questions, and it honestly tickles the right part of my brain :)", "https://what-if.xkcd.com/"],
        ["there's a website that only shares good, positive news in a bunch of categories!", "https://www.goodnewsnetwork.org/"],
        ["<i>Quake III Arena</i> implements a fast algorithm to get the inverse square root of a number, which almost enters the realm of what is considered dark magic..", "https://en.wikipedia.org/wiki/Fast_inverse_square_root"],
        ["the '<i>Call of the Void</i>' is the (honestly sick) name given to those intrusive thoughts such as 'what if I jumped off this bridge right now?'", "https://www.healthline.com/health/call-of-the-void"],
        ["<i>Medjed</i> is an Ancient Egyptian deity that looks...particularly unique.", "https://en.wikipedia.org/wiki/Medjed"],
        ["North Korea has its own Basketball rules, which are pretty interesting.", "https://basketballforall.com/north-korea-basketball-rules/"],
        ["we're usually too optimistic when predicting how much time we need for a task, and too pessimistic when predicting someone else's time...basically, we suck at that.", "https://en.wikipedia.org/wiki/Planning_fallacy"],
        ["<i>amicable numbers</i> are fun, and I also just like their name :)", "https://oeis.org/wiki/Amicable_numbers"],
        ["<i>Srinivasa Ramanujan</i> is (considered by many to be) one of the greatest mathematicians of all time; I got introduced to him by stumbling upon his 'birthday magic square'.", "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan"],
        ["half a byte/octet is called a <i>nibble</i>...funny name.", "https://en.wikipedia.org/wiki/Nibble"],
    ];

    const link = document.querySelector("#randlink");

    let choice = data[randint(data.length)];
    link.innerHTML = choice[0];
    link.href = choice[1];
}

function typing() { // thanks Hyperplexed for code explanation
    const phrases = ["confused.jpg", "a student", "a tech enthusiast", "learning", "having fun", "reading Stack Overflow", "breaking code", "improving", "sleeping", "omitting security flaws?", "going insane", "aaaaaaaaaaaaaaaa", "NOT wasting your time", "alive (optional)", "the title", "awake, unless I'm sleeping", "probably online"];
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

function follow(event) {
  let width = window.innerWidth, height = window.innerHeight;
  let blob = document.getElementById("blob");
  
  blob.style.transform = `translate(${event.clientX - 150}px, ${event.clientY - 150}px)`;
  
  let g = (event.clientX / width) * 255;
  let b = (event.clientY / height) * 255;
  
  blob.style.backgroundColor = `rgb(${b}, ${g}, ${b})`;
}

typing();
refreshlink();

const refresh = document.querySelector("#refreshlink");
refresh.addEventListener("click", refreshlink);
document.addEventListener("mousemove", follow);
