import styles from "../page.module.scss";

export default function JavascriptAbout() {
  return (
    <section className={styles.descriptionSection}>
      <br />
      <h2 className={styles.paraTitle}>About JavaScript</h2>
      <>
        <p>
          JavaScript adds interactivity, logic, and dynamic behavior to web
          pages. It works with the browser to respond to clicks, update content,
          fetch data, and control animations.
        </p>
        <br />

        <p>JavaScript answers the question: “What can this do?”</p>
        <br />

        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Important beginner concepts include:
        </p>
        <br />
        <ul style={{ paddingLeft: "0.8rem" }}>
          <li>
            <strong>Variables</strong> – Used to store values. Modern JavaScript
            uses &quot;let&quot; and &quot;const&quot;.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`// Using let (CAN be reassigned)

let counter = 0;
counter = counter + 1;      // 1
counter + 1;                // 2

// Using const (CANNOT be reassigned)

const pi = 3.14159;
pi = 3.2;                   // Error: cannot reassign const
`}
            </pre>
          </div>
          <br />
          <li>
            <strong>Data Types</strong> – Common ones are strings, numbers,
            booleans, arrays, objects, and null/undefined.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`let name = "Alice";        // string
let age = 25;              // number
let happy = true;          // boolean
let nothing = null;        // null
let notAssigned;           // undefined
let id = Symbol("id");     // symbol
`}
            </pre>
          </div>
          <br />
          <li>
            <strong>Functions</strong> – Reusable blocks of code. They take
            input, perform work, and return output.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`function greet(name) {
  return "Hello " + name;
}
`}
            </pre>
            <br />
          </div>
          <li>
            <strong>Objects</strong> – Collections of key/value pairs. They
            represent real-world things.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`const person = { name: "Mark", age: 30 };
`}
            </pre>
          </div>
          <br />
          <li>
            <strong>Arrays</strong> – Ordered lists of data.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`const fruits = ["apple", "banana", "orange"];
              
fruits.push("kiwi");
console.log(fruits[0]);      // "apple"
console.log(fruits.length);  // 4
console.log(fruits);         // ["apple", "banana", "orange", "kiwi"]
`}
            </pre>
          </div>
          <br />
          <li>
            <strong>Conditional Statements</strong> – Allow your code to make
            decisions and run different actions based on conditions.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`// IF
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

// IF ELSE
let time = 15;

if (time < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon");
}

// ELSE IF
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else {
  console.log("Try again!");
}
`}
            </pre>
          </div>
          <br />

          <li>
            <strong>DOM Manipulation</strong> – Changing HTML content or styling
            using JavaScript.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`document.querySelector("#myDiv").textContent = "Hello World!";
`}
            </pre>
          </div>
          <br />
          <li>
            <strong>Events</strong> – Code that runs when something happens,
            like a button click.
          </li>
          <br />
          <div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "white",
                padding: "0.5rem",
                width: "fit-content",
                borderRadius: "10px",
              }}
            >
              {`button.addEventListener("click", () => {
  console.log("Button clicked!");
});
`}
            </pre>
          </div>
          <br />
          <li>
            <strong>JSON</strong> – A text format for sending and storing data.
          </li>
        </ul>
        <br />
        <div>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              backgroundColor: "white",
              padding: "0.5rem",
              width: "fit-content",
              borderRadius: "10px",
            }}
          >
            {`{
  "name": "Maria",
  "age": 28,
  "isStudent": false,
  "skills": ["JavaScript", "HTML", "CSS"],
  "address": {
    "city": "Berlin",
    "country": "Germany"
  }
}
`}
          </pre>
        </div>
        <br />

        <p
          style={{
            marginTop: "1rem",
            color: "var(--darkorange)",
            fontWeight: "bold",
          }}
        >
          Modern JavaScript includes helpful features like:
        </p>
        <br />

        <ul style={{ paddingLeft: "0.8rem" }}>
          <li>
            <strong>Optional Chaining</strong> – Safely access nested
            properties: user?.profile?.email
          </li>
          <br />
          <li>
            <strong>Nullish Coalescing</strong> – Default values: name ??
            &quot;Guest&quot;
          </li>
          <br />
          <li>
            <strong>Async/Await</strong> – Cleaner asynchronous code for
            fetching data.
          </li>
        </ul>
        <br />
        <p style={{ fontWeight: "bold" }}>
          JavaScript brings websites to life and lets developers create
          everything from simple interactions to full web apps.
        </p>
      </>
    </section>
  );
}
