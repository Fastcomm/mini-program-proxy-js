class MiniProgramProxy {
  doSomething() {
    window.alert("LIB IS WORKING");
  }
}

const miniProgramProxy = new MiniProgramProxy();
export default miniProgramProxy;
