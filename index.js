

takeANumber(que, name) {
  var n;
  que.push(name);
  n = que.length;
  return `Welcome, ${name}. You are number ${n} in line.`;
}