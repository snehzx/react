const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  display: "flex",
};

export default function PostComponent({
  image = "",
  title,
  description = "",
  timing = "00:00",
  tool = "",
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          border: " 1px solid white",
          width: 400,
          padding: 10,
        }}
      >
        {/*writing inside curly braces -variables , this is called expressions*/}
        <div style={style}>
          <img
            src={image}
            style={{
              width: 30,
              height: 20,
              borderRadius: 50,
              objectFit: "contain",
              border: "1ps solid grey",
              marginRight: 30,
            }}
          ></img>
          <div>
            <b
              style={{
                color: "limegreen",
              }}
            >
              {title}
            </b>
            <div>{description}: </div>
            <div>{timing}</div>
          </div>
        </div>
        <div
          style={{
            color: "pink",
          }}
        >
          {tool}
        </div>
      </div>
    </div>
  );
}
