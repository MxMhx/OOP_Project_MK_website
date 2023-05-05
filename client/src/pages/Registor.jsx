import axios from "axios";
import FilterBar from "../components/Filter";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPass, setComfirmPass] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setBirthday(date + "-" + month + "-" + year);
    if (password === comfirmPass) {
      axios
        .post("/auth/register", {
          name: name,
          email: email,
          password: password,
          phone: phone,
          birthday: birthday,
        })
        .then(() => {
          setIsLoading(false);
          setIsInvalid(false);
          setName("");
          setEmail("");
          setPassword("");
          setComfirmPass("");
          setPhone("");
          setBirthday("");
          setDate("");
          setMonth("");
          setYear("");
          window.location.replace("/login");
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setIsInvalid(true);
      setIsLoading(false);
    }
  };
  return (
    <div className="font-kanit">
      <FilterBar title="สร้างบัญชี" />
      <div className="flex justify-center mt-5 w-full h-[550px]">
        <form className="w-1/3" onSubmit={(e) => handleRegister(e)}>
          <div className="flex my-5">
            <div className="flex flex-col w-full">
              <label>ชื่อ</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="text"
                placeholder="ชื่อ"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex my-5 justify-between">
            <div className="flex flex-col">
              <label>เบอร์โทรศัพท์มือถือ</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="text"
                placeholder="08xxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label>อีเมลล์</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="email"
                placeholder="อีเมลล์"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col my-5">
            <h1>วันเกิด</h1>
            <div className="flex my-5">
              <select
                name="month"
                className="px-2 py-1 rounded-lg shadow-md mx-2"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select
                name="day"
                className="px-2 py-1 rounded-lg shadow-md mx-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                name="year"
                className="px-2 py-1 rounded-lg shadow-md mx-2"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
              </select>
            </div>
          </div>
          <h1>ตั้งค่ารหัสผ่าน</h1>
          <div className="flex my-5 justify-between">
            <div className="flex flex-col w-[45%]">
              <label>รหัสผ่าน</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="password"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[45%]">
              <label>ยืนยันรหัสผ่าน</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                value={comfirmPass}
                onChange={(e) => setComfirmPass(e.target.value)}
              />
              {isInvalid && (
                <p className="text-red mt-2">กรอกรหัสผ่านใหม่อีกครั้ง</p>
              )}
            </div>
          </div>
          <button
            className="px-4 py-2 font-bold text-white bg-red rounded-full hover:bg-third-color focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            ลงทะเบียน
          </button>
        </form>
      </div>
    </div>
  );
}
