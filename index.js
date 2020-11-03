class MiniProgramProxy {
  doSomthing() {
    window.alert("LIB IS WORKING");
  }
}

const miniProgramProxy = new MiniProgramProxy();
export default miniProgramProxy;
