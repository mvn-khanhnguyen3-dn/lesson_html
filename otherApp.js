import { Utils } from "./lib/untils";
var sum = Utils.sum, pi = Utils.pi;
  console.log('2π = ' + sum(pi, pi));

  function showMessAfterTimeout(msg, who, timeout, onDone) {
    return new Promise((resolve,reject) =>{
      setTimeout(function () {
        resolve(`${msg} Hi  ${who} !`);
      }, timeout);
    });
   
  }
  showMessAfterTimeout('', 'Foo', 100).then((msg) => {
    showMessAfterTimeout(msg, 'Bar', 200).then((msg) => {
      console.log('Finish after 300ms:' + msg);
    });
  });

  function showMessAfterTimeout(msg, who, timeout, onDone) {
    return new Promise((resolve,reject) =>{
      reject("err");
  })}
  showMessAfterTimeout('', 'Foo', 100).then((msg) => {
    showMessAfterTimeout(msg, 'Bar', 200).then((msg) => {
      console.log('Finish after 300ms:' + msg);
    });
  }).catch(err => console.error(err));