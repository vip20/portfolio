import React, { useEffect, useState } from "react";
import { APP_CONST } from "../../core/constants";
import { storage } from "../../firebase";
import { CustNavbar } from "../custnavbar/CustNavbar";
import { Profile } from "../profile/Profile";

export const Home = () => {
  const [imageUrl, setImageUrl] = useState("");
  const homeConst = APP_CONST.home;
  useEffect(() => {
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
  });
  return (
    <div className="p-24 full-height">
      <CustNavbar appConst={homeConst}></CustNavbar>

      <Profile appConst={homeConst}></Profile>
    </div>
  );
};

// const getFilefromFirebase = (fileName: string) => {
//   return from(storage.child(`${fileName}`).getDownloadURL());
// };
