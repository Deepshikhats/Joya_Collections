import React, { useState } from "react";
import { AsyncSelect, Input, Select } from "@components";
import { Col, Container, Row } from "react-bootstrap";
import "./tabs.scss";
import { stockDetailsStyles } from "@utils";

const options = [
  {
    label: "Men",
    value: "1",
  },
  {
    label: "Women",
    value: "1",
  },
];
type imagesArray = { title: string; link: any }[];
const AddStock: React.FC = () => {
  const [images, setImages] = useState<imagesArray>([
    { title: "Primary image", link: "" },
    { title: "Others 1", link: "" },
    { title: "Others 2", link: "" },
    { title: "Others 3", link: "" },
  ]);

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const imgDataUrl = event.target?.result;

      setImages((prev) => {
        let imgs = [...prev];
        imgs[index].link = imgDataUrl;

        return [...imgs];
      });
    };
  };

  return (
    <Container className="hContainer my-5">
      <Row>
        <h2 className="txt-p4 text-center">DETAILS</h2>
      </Row>
      <Row className="border2 my-4 py-5">
        <Row style={{ rowGap: 40 }}>
          <Col lg="4" className="d-flex flex-column gap40">
            <Input label="Product Name*" />
            <Input label="Maximum Retail Price*" />
            <AsyncSelect
              loadOptions={() => options}
              value={""}
              onChange={() => null}
              placeholder="Color"
              styles={stockDetailsStyles}
              isMulti={true}
            />
            <AsyncSelect
              loadOptions={() => options}
              value={""}
              onChange={() => null}
              placeholder="Category"
              styles={stockDetailsStyles}
            />
            <Select
              options={options}
              value={""}
              onChange={() => null}
              placeholder="Target Customer Category"
              styles={stockDetailsStyles}
            />
          </Col>
          <Col lg="4" className="d-flex flex-column gap40">
            <Input label="Code*" />
            <Input label="Selling Price*" />
            <Input label="Neck Type" />
            <AsyncSelect
              loadOptions={() => options}
              value={""}
              onChange={() => null}
              placeholder="Material"
              styles={stockDetailsStyles}
            />
            <AsyncSelect
              loadOptions={() => options}
              value={""}
              onChange={() => null}
              placeholder="Outfit Type"
              styles={stockDetailsStyles}
            />
          </Col>
          <Col lg="4" className="d-flex flex-column gap40">
            <Input label="Total Stock" />
            <Input label="Discount" />
            <Input label="Sleeve Type" />
            <AsyncSelect
              loadOptions={() => options}
              value={""}
              onChange={() => null}
              placeholder="Size"
              styles={stockDetailsStyles}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" className="d-flex flex-column description">
            <label htmlFor="description">Description</label>
            <textarea name="" id="description" className="mt-1"></textarea>
          </Col>
        </Row>
      </Row>

      <Row className=" my-4">
        <h2 className="txt-p4 text-center">IMAGES</h2>
      </Row>
      <Row className="border2">
        <p>You can upload four images of the product</p>

        {images.map((img, index) => (
          <Row key={index} className="border1 mb-2 py-4" style={{ rowGap: 20 }}>
            <Col md="4">
              <label htmlFor={img.title} className="imgButtons">
                {img.title}
              </label>
              <input
                type="file"
                id={img.title}
                className="d-none"
                onChange={(e) => handleFileUpload(e, index)}
              />
            </Col>
            <Col md="6">
              <img
                src={img.link}
                alt=""
                style={{ maxHeight: "600px" }}
                className="w-100"
              />
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default AddStock;
