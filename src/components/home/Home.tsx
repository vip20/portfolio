import React from "react";
import { APP_CONST } from "../../core/constants";
import useSticky from "../../hooks/useSticky";
import { CustNavbar } from "../custnavbar/CustNavbar";
import { Profile } from "../profile/Profile";

export const Home = () => {
  const { isSticky, element } = useSticky();
  // const [imageUrl, setImageUrl] = useState("");
  const homeConst = APP_CONST.home;
  // useEffect(() => {
  // getFilefromFirebase("photos/vinay_1.jpg")
  //   .pipe(switchMap((x) => of(x)))
  //   .subscribe(
  //     (x) => {
  //       setImageUrl(x);
  //     },
  //     (e) => {
  //       console.error(e);
  //       setImageUrl("");
  //     }
  //   );
  // });
  return (
    <div className=" full-height">
      <CustNavbar appConst={homeConst} isSticky={isSticky}></CustNavbar>
      <div ref={element}>
        <Profile appConst={homeConst}></Profile>
      </div>
    </div>
  );
};

// const getFilefromFirebase = (fileName: string) => {
//   return from(storage.child(`${fileName}`).getDownloadURL());
// };
