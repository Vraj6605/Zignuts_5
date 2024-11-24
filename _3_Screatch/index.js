
// ReactDOM.render(<h1>Hello</h1>,document.getElementById("root"))

// --------------------------

// let rootCon = document.getElementById("root");

// const h1 = document.createElement("h1");
// const textNode = document.createTextNode("Hello Vraj")
// h1.appendChild(textNode);
// h1.classList.add("header")
// h1.className = "NewHeader"

// rootCon.appendChild(h1);

// -------------------------

// let element = (
//   <div>
//     <h1>Hello JSX</h1>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi.</p>
//   </div>
// )

// ReactDOM.render(element,document.getElementById("root"))

// ---------------------------

const navbar = (
  <nav>
    <h1>Zignuts</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact us</li>
    </ul>
  </nav>
);


ReactDOM.render(navbar,document.getElementById("root"))