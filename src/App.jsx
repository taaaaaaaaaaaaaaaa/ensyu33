import { useEffect, useState } from "react";
import per from '/age.json';
export default Main;

function Main() {
  const Age = {
    "per": per,
  }
  const [ele] = useState("per");
  const [agedata, setageData] = useState(per);
  useEffect(() => {
    setageData(Age[ele]);
  })
  
  let pack = "";
  let wall = "";

  agedata.map(
    (item) => {
      pack += item[ele] + "|";
      wall += item[ele] + ",";
    }
  )
  return (
  <main>
      <section className="section">
        <div className="container">
          <h1 className = "title">日本大学文理学部情報科学科 Webプログラミングの演習課題</h1>
          <h1>日本人口の年齢別割合</h1>
          <h1>学籍番号：5420028</h1>
          <h1>氏名：平尾健</h1>
        </div>
        <li><h1>0歳〜14歳：11.8%</h1></li>
        <li><h1>15歳〜64歳：59.4%</h1></li>
        <li><h1>65歳〜74歳：28.9%</h1></li>
        <li><h1>75歳〜：14.9%</h1></li>
        </section>
        <center>
      <img src = {`https://image-charts.com/chart?cht=p&chs=400x400&chd=t:${wall}&chl=${pack}&chco=ff55ff|00d400|f15b5b|008db7`} ></img>
      </center>
    </main>
  );
}