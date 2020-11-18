import classNames from "classnames";
import React from "react";
import FadeIn from "react-fade-in";
import { APP_CONST } from "../../core/constants";
import useResponsive from "../../hooks/useResponsive";
import useSticky from "../../hooks/useSticky";
import { About } from "../about/About";
import { CustNavbar } from "../custnavbar/CustNavbar";
import { Profile } from "../profile/Profile";
import "./Home.scss";

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

  const { width } = useResponsive();
  let sectionCntrClass = classNames({
    "is-mobile": width < 768,
    "section-container": true,
  });
  return (
    <div className=" full-height">
      <CustNavbar appConst={homeConst} isSticky={isSticky}></CustNavbar>
      <div ref={element}>
        <FadeIn>
          <section id="home" className={sectionCntrClass}>
            <Profile appConst={homeConst}></Profile>
          </section>
          <section id="about" className={sectionCntrClass}>
            <About appConst={homeConst}></About>
          </section>
          <section id="skills" className={sectionCntrClass}></section>
        </FadeIn>
      </div>
    </div>
  );
};

// const getFilefromFirebase = (fileName: string) => {
//   return from(storage.child(`${fileName}`).getDownloadURL());
// };
