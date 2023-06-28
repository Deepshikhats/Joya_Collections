import React, { FC, ReactElement, useState } from "react";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import "./filter.scss";
import { CheckBox, SelectedFilter } from "@components";
const FilterContainer: FC = (): ReactElement => {
  const [activeFilter, setActiveFilter] = useState<Array<string>>([]);
  const filters: { [index: string]: Array<any> } = {
    price: [
      { id: "1", type: "0 - 500" },
      { id: "1", type: "500 - 1000" },
    ],
    sizes: [
      { id: "1", type: "large" },
      { id: "2", type: "small" },
    ],
    color: [
      { id: "1", type: "blue" },
      { id: "2", type: "red" },
    ],
    material: [
      { id: "1", type: "cotton" },
      { id: "2", type: "linen" },
    ],
    sleeves: [
      { id: "1", type: "full sleeve" },
      { id: "2", type: "half sleeve" },
    ],
    discount: [{ id: "1", type: "30% or more" }],
  };
  const handleFilter = (item: any) => {
    if (activeFilter.includes(item.type)) {
      handleRemoveSelection(item.type);
      return;
    }
    setActiveFilter(() => [...activeFilter, item.type]);
  };
  const handleRemoveSelection = (item: any) => {
    const filtered = activeFilter.filter((filter) => item != filter);
    setActiveFilter([...filtered]);
  };
  const clearFilters = () => setActiveFilter([]);
  return (
    <section className="d-flex flex-column rounded-2 top-86 position-sticky bg-white p-3">
      <div className="d-flex justify-content-between">
        <h4>Filters</h4>
        <button
          className="text-primary border-0 bg-transparent"
          onClick={clearFilters}
        >
          Clear All
        </button>
      </div>
      <div className="d-flex align-items-center gap20 my-3 flex-wrap">
        {activeFilter.map((v, i) => (
          <SelectedFilter
            index={i}
            item={v}
            removeSelection={handleRemoveSelection}
          />
        ))}
      </div>
      <div>
        <Accordion flush>
          {Object.keys(filters).map((filterItem, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header className="accH fontRoboto">
                {filterItem}
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  {filters[filterItem]?.map((item, ind) => (
                    <CheckBox
                      label={item?.type}
                      key={ind}
                      checked={activeFilter.includes(item.type)}
                      onChange={() => handleFilter(item)}
                    />
                  ))}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FilterContainer;
