function App() {
  return (
    <div>
      <PostComponent />
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  display: "flex",
};

function PostComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: " 1px solid red",
          width: 500,
        }}
      >
        <div style={style}>
          <img
            src={"./src/assets/react.svg"}
            style={{
              width: 30,
              height: 20,
              borderRadius: 20,
            }}
          ></img>
          <div>
            <b>REACT</b>
            <div>learning going on </div>
            <div>00.00</div>
          </div>
        </div>
        <div>learning react + vite</div>
      </div>
    </div>
  );
}
export default App;
