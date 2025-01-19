function init() {
    let name = "muku";
    function displayName() {
      console.log(name); 
    }
    return displayName;
  }
  let initial=init()
  initial()


  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
  