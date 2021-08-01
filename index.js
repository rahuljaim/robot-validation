/*
I'm not a robot
You want to verify that the user of your app is a human and not a robot.
Acceptance Criteria:-
    Render 6 images out of which 5 are different and 1 is copy of one from the previous 5.
    Randomly arrange all 6 images every time the page reloads.
    Every time choose a random image to repeat.
    Render a h3 tag with text Please click on the identical tiles to verify that you are not a robot
    On one or more clicks on images, Reset button should appear with id="reset" and should disappear when it is clicked (i.e., after state is reset to initial state).
    Image tags should have data-ns-test attribute with values img1, img2, img3, img4 and img5. One of them should repeat as one image repeats. That means, identical images should have identical value for data-ns-test attribute
    When two images are clicked, a verify button should appear which will be used to verify the user. It should have innerHTML Verify and id="btn". Even for more than 2 clicks, the verify button should not be rendered.
    When two images are selected and both the images are identical, then render a p tag with id="para", containing the text You are a human. Congratulations!. If the images clicked are different then render a p tag with id="para", containing the text We can't verify you as a human. You selected the non-identical tiles.
    Please ensure that double clicking the same image does not render the verify button.
    Use click event to govern the image selection.
    Please use images that are <10kb
There are 3 states:
    State 1: When user has not clicked the tiles.
    In this case a message should show- Please click on the identical tiles to verify that you are not a robot and no Verify button or Reset button should show because no tiles have been clicked.

    State 2: When user has clicked at least one tile.
    In this case Reset button should show. Clicking on this button takes you to State 1

    State 3: When user has clicked both the tiles.
    In this case Verify button should also show.

    State 4: When the Verify button is clicked.
    In this case, Verify button should disappear and You are a human. Congratulations! or We can't verify you as a human. You selected the non-identical tiles. message should come up depending on whether the tiles clicked were identical or not. */

//get the elements
_ = (id) => document.querySelector(id);
_id = (id) => document.getElementById(id);
let reset = _("#reset");
let btn = _("#btn");
let count = 0;
let verifyarr = [];
let result = _("#status");
let para = document.createElement("p");
para.setAttribute("id", "para");
btn.setAttribute("class", "hidden1");
// reset.setAttribute("class","hidden1");
reset1 = (el) => {
  reset.removeAttribute("class", "hidden1");
  reset.setAttribute("class", "visible1");
};
reset2 = (el2) => {
  reset.removeAttribute("class", "visible1");
  reset.setAttribute("class", "hidden1");
  btn.removeAttribute("class", "visible1");
  btn.setAttribute("class", "hidden1");
  para.textContent = "";
  count = 0;
  verifyarr.length=0;
  shuffleRandom();
};

let shuffle = [
  {
    src: "./images/2b827.png",
    id: 1,
    data: "img1",
  },
  {
    src: "./images/2bg48.png",
    id: 2,
    data: "img2",
  },
  {
    src: "./images/2cegf.png",
    id: 3,
    data: "img3",
  },
  {
    src: "./images/2cg58.png",
    id: 4,
    data: "img4",
  },
  {
    src: "./images/2cgyx.png",
    id: 5,
    data: "img5",
  },
];

//let arr=[1,6,3,4,1,6,7]
let rand = [];
let addedArr = [];
function randonval() {
  while (rand.length != shuffle.length) {
    let a1 = Math.floor(Math.random() * shuffle.length);
    if (!addedArr.includes(a1)) {
      rand.push(shuffle[a1]);
      addedArr.push(a1);
    }
  }
  rand.push(shuffle[Math.floor(Math.random() * shuffle.length)]);
  console.log(rand);
}

// function addcopy6th(){
//     let copy6= Math.floor(Math.random()*rand.length);
//     rand.push(rand[copy6]);
// }

function shuffleRandom() {
  rand.length = 0;
  addedArr.length = 0;
  randonval();
  let robot = document.querySelectorAll(".robot");
  let title = _("#title");
  if (title) title.remove();
  if (robot.length > 0) for (let i of robot) i.remove();

  //selected app id
  let app = _("#app");
  let h3tag = document.createElement("h3");
  h3tag.id = "title";
  h3tag.textContent =
    "Please click on the identical tiles to verify that you are not a robot";
  app.appendChild(h3tag);
  //    app.textContent = "This is text";
  let cnt = 1;
  for (let k of rand) {
    let link = k.src;
    let id1 = k.id;
    let dnt = k.data;
    let img1 = document.createElement("img");
    img1.className = "robot";
    img1.setAttribute("src", link);
    img1.setAttribute("id", cnt);
    img1.setAttribute("data-ns-test", dnt);
    img1.addEventListener("click", verify);
    app.appendChild(img1);
    cnt++;
  }
}
randonval();
console.log(rand);
verify = (e) => {
  reset1();
  if (!verifyarr.includes(e.target.id)) 
  verifyarr.push(e.target.id);
  //   e.target.id.remove;
  count++;
  if (verifyarr.length == 2) {
    btn.removeAttribute("class", "hidden1");
    btn.setAttribute("class", "visible1");
    // verifybtn1();
  }
  if (verifyarr.length > 2) {
    btn.removeAttribute("class", "visible1");
    btn.setAttribute("class", "hidden1");
    
    // verifybtn1();
  }

  console.log(e.target.id, count);
  //   if(e.target.id)
};
reset.addEventListener("click", reset2);

verifybtn1 = (el3) => {
  btn.removeAttribute("class", "visible1");
  btn.setAttribute("class", "hidden1");
  let [first, second] = verifyarr;

  if (_id(first).getAttribute("data-ns-test") === _id(second).getAttribute("data-ns-test")) {
    para.textContent = "You are a human. Congratulations!";
    result.appendChild(para);
  } else {
    para.textContent =
      "We can't verify you as a human. You selected the non-identical tiles.";
    result.appendChild(para);
  }
};
