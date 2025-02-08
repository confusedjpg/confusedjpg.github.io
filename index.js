function randint(max) {
    return Math.floor(Math.random() * max);
}

function clamp(val, min, max) {
    return Math.min(Math.max(min, val), max);
}

let index_old = -1;
function refreshlink() {
    const data = [
        ["the Dogger Bank Incident was easily avoidable, and almost led to more conflict..", "https://en.wikipedia.org/wiki/Dogger_Bank_incident"],
        ["the answers in the StackExchange post linked here have been submitted 44 milliseconds apart! (and have the same vote count)", "https://gaming.meta.stackexchange.com/questions/12638/is-the-time-stamp-for-posted-answers-actually-accurate-to-the-millisecond"],
        ["a pizza can be cut in very interesting ways and still be equally shared between 2 people.", "https://en.wikipedia.org/wiki/Pizza_theorem"],
        ["<i>xkcd</i> creator <i>Randall Munroe</i> has books with serious answers to absurd questions, and it honestly tickles the right part of my brain (this sounds like an ad, it isn't)", "https://what-if.xkcd.com/"],
        ["there's a website that only shares good, positive news in a bunch of categories!", "https://www.goodnewsnetwork.org/"],
        ["<i>Quake III Arena</i> implements a fast algorithm to get the inverse square root of a number, which almost enters the realm of what is considered dark magic..", "https://en.wikipedia.org/wiki/Fast_inverse_square_root"],
        ["the '<i>Call of the Void</i>' is the (honestly sick) name given to those intrusive thoughts such as 'what if I jumped off this bridge right now?'", "https://www.healthline.com/health/call-of-the-void"],
        ["<i>Medjed</i> is an Ancient Egyptian deity that looks...particularly unique.", "https://en.wikipedia.org/wiki/Medjed"],
        ["North Korea has its own Basketball rules, which are pretty interesting.", "https://basketballforall.com/north-korea-basketball-rules/"],
        ["we're usually too optimistic when predicting how much time we need for a task, and too pessimistic when predicting someone else's time...basically, we suck at that.", "https://en.wikipedia.org/wiki/Planning_fallacy"],
        ["<i>amicable numbers</i> are fun, and I also just like their name :)", "https://oeis.org/wiki/Amicable_numbers"],
        ["<i>Srinivasa Ramanujan</i> is (considered by many to be) one of the greatest mathematicians of all time; I got introduced to him by stumbling upon his 'birthday magic square'.", "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan"],
        ["half a byte/octet is called a <i>nibble</i>...funny name.", "https://en.wikipedia.org/wiki/Nibble"],
        ["you could code traceroute in a few minutes, it's just a clever hack.", "https://gekk.info/articles/traceroute.htm"],
        ["Corporal Wojtek was an amazing soldier of the Polish Army.", "https://en.wikipedia.org/wiki/Wojtek_(bear)"],
    ];

    const link = document.querySelector("#randlink");

    let index = randint(data.length);
    while (index_old == index) {
        index = randint(data.length);
    }
    index_old = index;
    let choice = data[index];
    link.innerHTML = choice[0];
    link.href = choice[1];
}

function typing() { // thanks Hyperplexed for code explanation
    const phrases = ["confused.jpg", "a student", "a tech enthusiast", "learning", "having fun", "reading", "breaking code", "improving", "sleeping", "in your walls", "going insane", "aaaaaaaa", "NOT wasting time", "alive (optional)", "the title", "awake...unless", "probably online", "at your service", "fixing code", "open to discussion"];
    const main = document.querySelector("#changing-title")
    const title = document.querySelector("title");
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
        }, 40);
        oldText = text;
        while (oldText == text) {
            text = phrases[(Math.random() * phrases.length) | 0];
        }
    }, 5000);
}

function follow(event) {
    let width = window.innerWidth, height = window.innerHeight;
    let blob = document.getElementById("blob");
  
    blob.style.transform = `translate(${event.clientX - 50}px, ${event.clientY - 50}px)`;
}

function colors() {
    const intervalID = window.setInterval(() => {
        let style = document.documentElement.style;
        let color = window.getComputedStyle(document.body).getPropertyValue("--theme-color");
        let [h, s, l] = color.substring(4, color.length-1).split(", ");
        [h, s, l] = [(parseInt(h) + 1) % 360, parseInt(s), l];
        let hsl = `hsl(${h}, ${s}%, ${l})`;

        style.setProperty("--theme-color", hsl);
    }, 100);
}

function toggle_theme() {
    let style = document.documentElement.style;
    let theme = window.getComputedStyle(document.body).getPropertyValue("--theme");
    localStorage.setItem("theme", theme == 0 ? "light" : "dark");
    window.location.reload();
}

// TODO: shakify() and wavify() work pretty nicely
// BUT, they could be merged into one and only function
// and if the window is sized a specific way,
// the text will tend to slice in very annoying ways

function shakify() {
  let elems = document.querySelectorAll(".shakify");
  let elemsText = [];
  for (let elem of elems) {
    elemsText.push(elem.textContent);
  }
  for (let elemIdx = 0; elemIdx < elems.length; elemIdx++) {
      let intervalID = setInterval(() => {
        let tempHTML = "";
        for (let letterIdx = 0; letterIdx < elemsText[elemIdx].length; letterIdx++) {
          let letter = elemsText[elemIdx][letterIdx];
          let x = Math.random(), y = Math.random();
          tempHTML += `<span style="display: inline-block; transform: translate(${x}px, ${y}px);">${letter == " " ? "&nbsp;" : letter}</span>`
        }
        elems[elemIdx].innerHTML = tempHTML;
     }, 120);
  }
}

function wavify() {
  let elems = document.querySelectorAll(".wavify");
  let elemsText = [];
  for (let elem of elems) {
    elemsText.push(elem.textContent);
  }
  for (let elemIdx = 0; elemIdx < elems.length; elemIdx++) {
    let inc = 0;
      let intervalID = setInterval(() => {
        inc++;
        let tempHTML = "";
        for (let letterIdx = 0; letterIdx < elemsText[elemIdx].length; letterIdx++) {
          let letter = elemsText[elemIdx][letterIdx];
          let y = Math.sin(0.7 * (letterIdx + inc));
          tempHTML += `<span style="display: inline-block; transform: translateY(${y}px);">${letter == " " ? "&nbsp;" : letter}</span>`;
        }
        elems[elemIdx].innerHTML = tempHTML;
     }, 100);
  }
}

const refresh = document.querySelector("#refreshlink");
refresh.addEventListener("click", refreshlink);

const theme_toggle = document.querySelector("#card-theme-toggle");
theme_toggle.addEventListener("click", toggle_theme);
document.addEventListener("mousemove", follow);

typing();
refreshlink();
colors();

shakify();
wavify();
