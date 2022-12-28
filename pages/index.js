import { useState } from "react";

//Utils
import { useRouter } from "next/router";
import { link_about_page } from "../components/page_url";

//Components
import Link from "next/link";

const HomePage = () => {
  //Utils ***************************************************************************** //
  const Router = useRouter();
  //Utils ***************************************************************************** //

  //States ***************************************************************************** //
  const [state, setState] = useState({
    isErorr: false, //Bool
    isLoading: false, //Bool
    isToggle: false, //Bool
    count: 0, //Int
    message: "Initial Message", //String
  });
  //States ***************************************************************************** //

  //Functions ************************************************************************** //
  const handleChangeState = (value) => {
    if (typeof value === "object")
      return setState((prev) => ({ ...prev, ...value }));
    alert("Not object");
  };
  //Functions ************************************************************************** //

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button
          type="button"
          onClick={() =>
            handleChangeState({
              message: "Change Message",
              count: state.count + 1,
            })
          }
        >
          {state?.message} {state?.count}
        </button>
        <div
          style={{ marginTop: "20px", display: "grid", placeItems: "center" }}
        >
          <Link href={link_about_page}>About</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
