import classes from "./InfoPage.module.css";
import wgif from "../../assets/w.gif";
import first from "../../assets/first.gif";
import out from "../../assets/out.gif";

const InfoPage = () => {
  return (
    <div className={classes.outer_div}>
      <p style={{textAlign: "left", fontSize: "40px", marginLeft: "30px"}}>
      When you need to scope the waves but you don't want to pay
      <br/>
      When you want to surf, but you don't want to get up from bed
      <br/> 
      When ur bored at school or work 
      <br/>
      When you love the beach
    </p>
      <br />
      <div className={classes.vid_demo}>
        <img width={300} height={200} src={first} alt="loading..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.828"
          height="14.769"
          style={{ padding: "10px" }}
        >
          <path d="m13.616 2.828 2.585 2.586H0v4h16.143l-2.527 2.526 2.828 2.829 7.384-7.384L16.444 0l-2.828 2.828z" />
        </svg>
        <img width={300} height={200} src={out} alt="loading..." />
      </div>

      <br />
      <img width={200} height={100} src={wgif} alt="loading..." />
    </div>
  );
};

export default InfoPage;
