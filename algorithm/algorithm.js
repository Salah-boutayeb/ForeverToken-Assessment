function helloWorld(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      console.log("Hello");
    } else if (i % 5 === 0) {
      console.log("World");
    } else if (i % 7 === 0) {
      console.log("Yoo");
    } else {
      console.log(i);
    }
  }
}

helloWorld(100);
