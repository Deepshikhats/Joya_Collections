import React, { useEffect, useState } from "react";

interface propsTypes {
  totalCount: number;
  showCount: number;
}
const CustomPagination: React.FC<propsTypes> = (props) => {
  const { totalCount, showCount } = props;
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const maxPageNo = Math.ceil(totalCount / showCount);

  //set the array containing pageNos within the range
  const handlePageNos = (min: number, max: number) => {
    let a = [];
    for (let i = min; i <= max; i++) {
      a.push(i);
    }
    setPages([...a]);
  };

  //setting the min and max range of pages to show
  const handlePageNavigation = (clickedPage: number) => {
    setActivePage(clickedPage);
    if (clickedPage + 3 > maxPageNo) {
      maxPageNo - 6 > 0
        ? handlePageNos(maxPageNo - 6, maxPageNo)
        : handlePageNos(1, maxPageNo);
    } else {
      clickedPage - 3 > 0
        ? handlePageNos(clickedPage - 3, clickedPage + 3)
        : maxPageNo >= 7
        ? handlePageNos(1, 7)
        : handlePageNos(1, maxPageNo);
    }
  };

  //set initial range
  useEffect(() => {
    if (maxPageNo < 7) {
      handlePageNos(1, maxPageNo);
    } else {
      handlePageNos(1, 7);
    }
  }, []);

  return (
    <div className="d-flex pagination justify-content-center mt-3">
      <button
        className="text-primary border-0 bg-transparent"
        onClick={() => handlePageNavigation(activePage - 1)}
        disabled={activePage === 1}
      >
        Previous
      </button>
      <ul className="d-flex ">
        {pages.map((v, i) => (
          <li
            key={i}
            className={`${
              activePage == v ? "bg-primary text-white" : ""
            } rounded-circle pageNumber text-center`}
            onClick={() => handlePageNavigation(v)}
            style={{ listStyleType: "none" }}
          >
            {v}
          </li>
        ))}
      </ul>
      <button
        className="text-primary border-0 bg-transparent"
        onClick={() => handlePageNavigation(activePage + 1)}
        disabled={activePage === maxPageNo}
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
