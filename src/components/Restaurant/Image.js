import React from "react";

export default function Image({ url }) {
  let arrow = "<";
  let imgUrl =
    "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_300,f_auto,q_auto,dpr_auto,g_auto,c_fill/kzesqadyjqyqgnhwdkzs";

  return (
    <div className="image" style={{ height: "200px", marginTop: "50px" }}>
      {/* background Image */}
      <img
        style={{ height: "100%", maxWidth: "100%", width: "100%" }}
        src={imgUrl}
        alt=""
      />

      {/* leftBack arrow */}
      <div className="btn"> {arrow}</div>

      {/* bookmark Image */}
      <div className="btn2">
        <img
          style={{ height: "25px" }}
          src="https://cdn.iconscout.com/icon/free/png-256/bookmark-1773018-1508960.png"
          alt=""
        />
      </div>

      {/* share img */}
      <div className="btn3">
        <img
          style={{ height: "25px" }}
          src="https://w7.pngwing.com/pngs/492/969/png-transparent-computer-icons-share-icon-icon-design-symbol-share-miscellaneous-blue-computer.png"
          alt=""
        />
      </div>

      {/* logo of restaurant */}
      <div className="btn4">
        <img style={{ height: "100px", padding: "8px" }} src={url} alt="" />
      </div>
    </div>
  );
}