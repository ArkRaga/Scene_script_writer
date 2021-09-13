const scene_holder = document.querySelector(".scene_holder");
const dio_btn = document.querySelector(".dio_btn");
const big_action_btn = document.querySelector(".bigA_btn");
const small_action_btn = document.querySelector(".smallA_btn");

let the_scene_arr = [];
let input_field = "";
let is_btn_active = false;
let characters = ["Skelly", "Edith", "Burt", "Emily", "Cast"];

const create_small_action = (txt) => {
  let ele = document.createElement("div");
  ele.classList.add("small_action");
  let h5 = document.createElement("h5");
  let btn = document.createElement("button");
  btn.addEventListener("click", () => {
    remove(idx);
  });
  btn.innerText = "X";
  h5.innerHTML = `* ${txt} *`;
  ele.appendChild(h5);
  ele.appendChild(btn);
  let idx = the_scene_arr.length;
  the_scene_arr.push({ id: idx, e: ele });
  input_field = "";
};

const create_big_action = (txt) => {
  let ele = document.createElement("div");
  ele.classList.add("big_action");
  let title = document.createElement("h3");
  let mainText = document.createElement("h3");
  let end = document.createElement("h3");
  let btn = document.createElement("button");
  btn.addEventListener("click", () => {
    remove(idx);
  });
  btn.innerText = "X";
  title.innerHTML = ` -----------{
        <span class="big_action_span">Big Action</span> }--------------`;
  mainText.innerHTML = ` ${txt} `;
  end.innerHTML = `---------------------------------`;
  ele.appendChild(title);
  ele.appendChild(mainText);
  ele.appendChild(end);
  ele.appendChild(btn);

  let idx = the_scene_arr.length;
  the_scene_arr.push({ id: idx, e: ele });
  input_field = "";
};

const create_Dio = (char, txt) => {
  let ele = document.createElement("div");
  let btn = document.createElement("button");
  let idx = the_scene_arr.length;
  btn.innerText = "X";
  btn.addEventListener("click", () => {
    remove(idx);
  });
  btn.classList.add("dio_btn");
  ele.classList.add("dio_box");
  let bdy = document.createElement("h4");
  bdy.innerHTML = `[ ${char} ] : ${txt}`;
  ele.appendChild(bdy);
  ele.appendChild(btn);
  the_scene_arr.push({ id: idx, e: ele });
  input_field = "";
};

const remove = (id) => {
  let ele = the_scene_arr.find((ele) => ele.id === id);
  the_scene_arr.splice(ele.id);
  console.log(ele);
  scene_holder.removeChild(ele.e);
  is_btn_active = false;
  update();
};

const handleChange = (e) => {
  input_field = e.target.value;
};

const new_dio = () => {
  if (is_btn_active) {
    return;
  } else {
    is_btn_active = true;
  }
  let ele = document.createElement("div");
  ele.classList.add("boxy");
  let sel = document.createElement("select");
  let inpt = document.createElement("input");
  let fin = document.createElement("button");
  let idx = the_scene_arr.length;
  inpt.onchange = (e) => handleChange(e);

  characters.forEach((ele) => {
    let opt = document.createElement("option");
    opt.innerText = ele;
    sel.appendChild(opt);
  });
  fin.innerText = "finish";
  fin.addEventListener("click", () => {
    remove(idx);
    create_Dio(sel.value, input_field);
    update();
  });
  ele.appendChild(sel);
  ele.appendChild(inpt);
  ele.appendChild(fin);

  the_scene_arr.push({ id: idx, e: ele });

  update();
};

const new_Big_action = () => {
  if (is_btn_active) {
    return;
  } else {
    is_btn_active = true;
  }
  let ele = document.createElement("div");
  let idx = the_scene_arr.length;
  ele.classList.add("boxy");
  let inpt = document.createElement("input");
  inpt.onchange = (e) => handleChange(e);
  let fin = document.createElement("button");
  fin.innerText = "finish";
  fin.addEventListener("click", () => {
    remove(idx);
    create_big_action(input_field);
    update();
  });
  ele.appendChild(inpt);
  ele.appendChild(fin);
  the_scene_arr.push({ id: idx, e: ele });
  update();
};

const new_small_action = () => {
  if (is_btn_active) {
    return;
  } else {
    is_btn_active = true;
  }
  let ele = document.createElement("div");
  let idx = the_scene_arr.length;
  ele.classList.add("boxy");
  let inpt = document.createElement("input");
  inpt.onchange = (e) => handleChange(e);
  let fin = document.createElement("button");
  fin.innerText = "finish";
  fin.addEventListener("click", () => {
    remove(idx);
    create_small_action(input_field);
    update();
  });
  ele.appendChild(inpt);
  ele.appendChild(fin);
  the_scene_arr.push({ id: idx, e: ele });
  update();
};

const update = () => {
  the_scene_arr.forEach((ele) => {
    scene_holder.appendChild(ele.e);
  });
};

dio_btn.addEventListener("click", new_dio);
big_action_btn.addEventListener("click", new_Big_action);
small_action_btn.addEventListener("click", new_small_action);

update();
