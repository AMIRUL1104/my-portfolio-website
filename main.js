// dark/light function function
const header_btn = document.querySelector(".header_btn");
const htmlTag = document.documentElement;
const lightDarkIcon = document.getElementById("lightDarkIcon");

header_btn.addEventListener("click", function () {
  if (htmlTag.className === "") {
    htmlTag.classList.add("light");
    lightDarkIcon.className = "fa-solid fa-moon";
  } else {
    htmlTag.classList.remove("light");
    lightDarkIcon.className = "fa-solid fa-sun";
  }
});

// navigation menu function
let menuBar = document.querySelector(".menuBar");
function windowWidth() {
  const navList = document.querySelector(".navList");

  if (window.innerWidth <= "780") {
    menuBar.style.display = "inline";
    navList.style.display = "none";
    menuBar.addEventListener("click", function () {
      if (navList.style.display === "inline") {
        navList.style.display = "none";
      } else {
        navList.style.display = "inline";
      }
    });
  } else {
    menuBar.style.display = "none";
    navList.style.display = "inline";
  }
}
windowWidth();
window.addEventListener("resize", windowWidth);

// project section project items details function
// it is created by using JS event bubbling and deligation
let see_more = document.querySelector(".see_more");
see_more.addEventListener("click", function (btn) {
  if (btn.target.tagName === "BUTTON") {
    let parent = btn.target.parentElement;
    let a = parent.lastElementChild;
    if (a.style.display === "block") {
      a.style.display = "none";
      btn.target.textContent = "less";
    } else {
      a.style.display = "block";
      btn.target.textContent = "see more...";
    }
  }
});

// skill section function
const frontend_skills = document.querySelector(".frontend_skills");
const backend_skills = document.querySelector(".backend_skills");

const frontend_tech = [
  { techNAME: "HTML5", learned: "95%", icon: "logo-img/html-5.png" },
  { techNAME: "CSS3", learned: "85%", icon: "logo-img/css-3.png" },
  { techNAME: "JavaScript", learned: "80%", icon: "logo-img/js.png" },
  { techNAME: "React", learned: "10%", icon: "logo-img/atom.png" },
  { techNAME: "Next.js", learned: "0%", icon: "logo-img/nextjs.png" },
];

const backend_tech = [
  { techNAME: "Node.js", learned: "0%", icon: "logo-img/nodejs.png" },
  { techNAME: "Express.js", learned: "0%", icon: "logo-img/express.png" },
  { techNAME: "MongoDB", learned: "0%", icon: "logo-img/database-storage.png" },
  { techNAME: "REST API", learned: "0%", icon: "logo-img/rest-api.png" },
];

frontend_tech.forEach((tech) => {
  let skill_item = document.createElement("div");
  frontend_skills.appendChild(skill_item);
  skill_item.className = "skill_item";

  let skill_name_div = document.createElement("div");
  skill_item.appendChild(skill_name_div);

  let h3 = document.createElement("h3");
  skill_name_div.appendChild(h3);
  h3.textContent = tech.techNAME;

  let logo = document.createElement("img");
  skill_name_div.appendChild(logo);
  logo.setAttribute("src", tech.icon);

  let skill_bar = document.createElement("div");
  skill_item.appendChild(skill_bar);
  skill_bar.className = "skill_bar";

  let p = document.createElement("p");
  p.textContent = tech.learned;
  skill_bar.appendChild(p);
  p.className = "learnd_style";

  p.style.width = `${tech.learned}`;
});

backend_tech.forEach((tech) => {
  let skill_item = document.createElement("div");
  backend_skills.appendChild(skill_item);
  skill_item.className = "skill_item";

  let skill_name_div = document.createElement("div");
  skill_item.appendChild(skill_name_div);

  let h3 = document.createElement("h3");
  skill_name_div.appendChild(h3);
  h3.textContent = tech.techNAME;

  let logo = document.createElement("img");
  skill_name_div.appendChild(logo);
  logo.setAttribute("src", tech.icon);

  let skill_bar = document.createElement("div");
  skill_item.appendChild(skill_bar);
  skill_bar.className = "skill_bar";

  let p = document.createElement("p");
  p.textContent = tech.learned;
  skill_bar.appendChild(p);
  p.className = "learnd_style";

  p.style.width = `${tech.learned}`;
});

let scrollCount = 0;
function scrollFunc(scrollCount) {
  window.addEventListener("scroll", function () {
    scrollCount = window.scrollY;
  });
}
function scrollToSection(id) {
  const section = document.getElementById(id);
  const headerHeight = document.querySelector(".header").offsetHeight; // header এর height ধরো
  const topPos = section.getBoundingClientRect().top - headerHeight;

  if (window.scrollY) {
    let count1 = topPos - scrollCount;
    window.scrollBy({
      top: count1,
      behavior: "smooth",
    });
  } else {
    window.scrollBy({
      top: topPos,
      behavior: "smooth",
    });
  }
}
scrollFunc(scrollToSection);
