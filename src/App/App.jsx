import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./App.module.css";
import { useState } from "react";
import warehouses from "../data";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState("AML");
  const [selectedWidth, setSelectedWidth] = useState("155");
  const [selectedHeight, setSelectedHeight] = useState("45");
  const [selectedRadius, setSelectedRadius] = useState("13");
  const [warehouse, setWarehouse] = useState("Exeed");

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleWidthChange = (event) => {
    setSelectedWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setSelectedHeight(event.target.value);
  };

  const handleRadiusChange = (event) => {
    setSelectedRadius(event.target.value);
  };

  const getKey = (company, width, height, radius) =>
    `${company}-${width}-${height}-${radius}`;

  const calculateWheelUnloadingWarehouse = (company, width, height, radius) => {
    const key = getKey(company, width, height, radius);
    const warehouse = warehouses[key] || "Ошибка";
    setWarehouse(warehouse);
  };

  return (
    <div className={styles.wrapper}>
      <Form className="pt-3">
        <Form.Label>Юридическое лицо</Form.Label>
        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="AML">Лахта</option>
          <option value="AMYZ">Юго-Запад</option>
          <option value="AMO">Озерки</option>
          <option value="AK">Комтранс</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ширина</Form.Label>
          <Form.Select
            value={selectedWidth}
            onChange={handleWidthChange}
            className="mb-3"
            aria-label="Default select example"
          >
            <option value="155">155</option>
            <option value="185">185</option>
            <option value="195">195</option>
            <option value="205">205</option>
            <option value="215">215</option>
            <option value="225">225</option>
            <option value="235">235</option>
            <option value="245">245</option>
            <option value="255">255</option>
            <option value="265">265</option>
            <option value="275">275</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Высота</Form.Label>
          <Form.Select
            value={selectedHeight}
            onChange={handleHeightChange}
            className="mb-3"
            aria-label="Default select example"
          >
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="65">65</option>
            <option value="70">70</option>
            <option value="75">75</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Радиус</Form.Label>
          <Form.Select
            value={selectedRadius}
            onChange={handleRadiusChange}
            className="mb-3"
            aria-label="Default select example"
          >
            <option value="13">13</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </Form.Select>
        </Form.Group>
        <Button
          onClick={() => {
            calculateWheelUnloadingWarehouse(
              selectedCompany,
              selectedWidth,
              selectedHeight,
              selectedRadius
            );
          }}
          variant="primary"
          type="button"
        >
          Рассчитать
        </Button>
      </Form>
      <div className={styles.footer}>Склад: {warehouse}</div>
    </div>
  );
};

export default App;
