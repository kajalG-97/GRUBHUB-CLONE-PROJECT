import { useNavigate } from "react-router";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      style={{
        backgroundColor: "black",
        width: "100%",
        textAlign: "center",
        height: "765px",
      }}
    >
      <img
        src="https://files.muzli.space/2cb87ddec50189ad7f823e9477258227.jpeg"
        alt=""
      />
    </div>
  );
};
