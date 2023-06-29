import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BasicSkeleton } from "@components";

interface ProductStoryProps {
  story: {
    description: string;
    productStory: string;
    sub: { [key: string]: string[] };
  };
}
const ProductStory: React.FC<ProductStoryProps> = ({ story }) => {
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <div id="product_story" className="bg-grey4 rounded-1 p-4">
      {loading ? (
        <>
          <BasicSkeleton height={30} className="mt-3" width={175} />
          <BasicSkeleton count={2} className="mt-3" />
        </>
      ) : (
        <>
          <h3>Product Story</h3>
          <p className="fs-6 txt-p2">{story?.productStory}</p>
        </>
      )}

      <Row className="mt-4">
        {loading
          ? [...Array(4)].map((_v, i) => (
              <Col lg={6} key={i}>
                <BasicSkeleton height={30} className="mt-3" width={175} />
                <BasicSkeleton count={3} className="mt-3" />
              </Col>
            ))
          : Object.keys(story?.sub || {})?.map(
              (features: string, i: number) => {
                return (
                  <Col lg={6} key={i}>
                    <h3>{`${features.slice(0, 1).toUpperCase()}${features
                      .slice(1)
                      .toLowerCase()}`}</h3>
                    <ul>
                      {story.sub[features]?.map((d: string, index: number) => {
                        return (
                          <li key={index} className="fs-6 txt-p2">
                            {d}
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                );
              }
            )}
      </Row>
    </div>
  );
};

export default ProductStory;
