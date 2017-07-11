
export function add() {
  return {
    type: "ADD",
    payload:1
  }
}

export function message(text) {
  return {
    type: "MSG",
    text:text
  }
}