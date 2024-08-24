import "./App.css";

function App() {
  let news =
    "Indains are really performed well in Paris Olympics and won around 25 medals.";
  return (
    <div>
      <h1>Learning String Methods</h1>
      <button
        type="button"
        onClick={() => {
          console.log(news.toUpperCase());
          console.log(news.toLowerCase());
        }}
      >
        UpperCase/LowerCase
      </button>
      <button
        type="button"
        onClick={() => {
          let firstName = "Sumanth";
          let lastName = "Dondamuri";
          let fullName = firstName.concat(lastName);
          let fullName2 = `${firstName} ${lastName}`;
          console.log(fullName);
          console.log(fullName2);
        }}
      >
        concat
      </button>
      <button
        type="button"
        onClick={() => {
          let player = "         MS    Dhoni     ";
          console.log(`----->${player.trim()}<-----`);
          console.log(`----->${player.trimStart()}<-----`);
          console.log(`----->${player.trimEnd()}<-----`);
        }}
      >
        trim/trimStart/trimEnd
      </button>
      <button
        type="button"
        onClick={() => {
          let msg = "Oh my God!";
          console.log(msg.padStart(100, "O"));
          console.log(msg.padEnd(100, "!"));
        }}
      >
        padStart/padEnd
      </button>
      <button
        type="button"
        onClick={() => {
          let jsr = "Jai Shri Ram";
          console.log(jsr.repeat(1008));
        }}
      >
        repeat
      </button>
      <button
        type="button"
        onClick={() => {
          let prayer =
            "India is my country .all Indians are my brothers and sisters";
          console.log(prayer.replace("India", "Bharat"));
          console.log(prayer.replaceAll("India", "Bharat"));
        }}
      >
        replace
      </button>
      <button
        type="button"
        onClick={() => {
          let prayer =
            "India is my country all Indians are my brothers and sisters.";
          console.log(prayer);
          console.log(prayer.split(" "));
        }}
      >
        split
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets.length);
          console.log(alphabets.at(0));
          console.log(alphabets.charAt(0));
          console.log(alphabets[0]);
        }}
      >
        length
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets.slice(9, 14));
          console.log(alphabets.substring(9, 14));
          console.log(alphabets.substr(9, 5));
        }}
      >
        slice/substring/substr
      </button>
      <button
        type="button"
        onClick={() => {
          for (let i = 3077; i < 3300; i++) {
            console.log(String.fromCharCode(i));
          }
        }}
      >
        fromCharCode
      </button>
      <button
        type="button"
        onClick={() => {
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

          for (let i = 0; i < alphabets.length; i++) {
            console.log(alphabets.charCodeAt(i));
          }
          let వయస్సు = 20;
          console.log(వయస్సు);
        }}
      >
        charCodeAt
      </button>
      <button
        type="button"
        onClick={() => {
          let warrior = "Shri Chatrapathi Shivaji Maharaj Ji.";
          console.log(warrior.startsWith("Shri"));
          console.log(warrior.endsWith("Ji."));
          console.log(warrior.includes("Sivaji"));
        }}
      >
        startswidth/endsWith/includes
      </button>
      <button
        type="button"
        onClick={() => {
          let jsr = "Jai Shri Ram Jai Shri Ram";
          console.log(jsr.lastIndexOf("Ram"));
          console.log(jsr.indexOf("Ram"));
          console.log(jsr.search(/ram/i));
        }}
      >
        indexof/lastIndexof
      </button>
    </div>
  );
}

export default App;
