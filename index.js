

function takeANumber(que, name) {
  var n;
  que.push(name);
  n = que.length;
  return `Welcome, ${name}. You are number ${n} in line.`;
}

function nowServing(que) {
  if (que.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var s = que[0];
  que.shift();
  return "Currently serving " + s + ".";
}
