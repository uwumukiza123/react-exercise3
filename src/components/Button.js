function alertMessage1() {
  alert("you clicked button 1");
}

function alertMessage2() {
  alert("you clicked button 2");
}

function alertMessage3() {
  alert("you clicked button 3");
}

export default function Button() {
  return (
    <div className="button">
      <button onClick={alertMessage1}>Button 1</button>
      <button onClick={alertMessage2}>Button 2</button>
      <button onClick={alertMessage3}>Button 3</button>
    </div>
  );
}
