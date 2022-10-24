// React Component!
// Follow <-> following
function FollowButton() {
  const [follwing, setFollwing] = React.useState(false)

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  }

  const followMtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "black",
    color: "white",
  }

  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9de",
  };

  return React.createElement("div", 
  {
    onClick: () => setFollwing(!follwing),
  }, 
    follwing ? followingBtnStyle : followMtnStyle
  );
}

const domContainer = document.querySelector("#follow_button_container");
ReactDOM.render(Reect.createElement(FollowButton), domContainer)