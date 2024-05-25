function calculator(num1, operation, num2 ) {
  if (operation === "+") {
    return (document.getElementById("para").innerText =
      Number(num1) + Number(num2));
  } else if (operation === "/") {
    return (document.getElementById("para").innerText =
      Number(num1) / Number(num2));
  } else if (operation === "*") {
    return (document.getElementById("para").innerText =
      Number(num1) * Number(num2));
  } else {
    return (document.getElementById("para").innerText =
      Number(num1) - Number(num2));
  }
}
