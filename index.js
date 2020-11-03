class MiniProgramProxy {
  doSomthing() {
    window.alert("Lib is working");
  }
}

const miniProgramProxy = new MiniProgramProxy();
export default miniProgramProxy;
