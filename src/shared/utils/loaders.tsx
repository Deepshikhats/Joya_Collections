import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface propTypes {
  count?: number;
  height?: string | number;
  width?: string | number;
  className?: string;
  containerClassName?: string;
}
export default function BasicSkeleton(props: propTypes) {
  const { count, height, width, className, containerClassName } = props;
  return (
    <Skeleton
      count={count || 1}
      height={height}
      width={width}
      baseColor="#cfd2cf"
      highlightColor="#c0c2c1"
      className={className}
      containerClassName={containerClassName}
    />
  );
}

export const ProductFeaturesLoader: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <BasicSkeleton height={400} width={400} />
      <div className="d-flex justify-content-between mt-2">
        <BasicSkeleton width={100} height={30} />
        <BasicSkeleton width={100} height={30} />
      </div>
    </div>
  );
};
export const ProductDescriptionSkeleton: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <BasicSkeleton height={30} />
      <BasicSkeleton height={30} width={"50%"} className="mt-3" />
      <BasicSkeleton height={10} width={"50%"} className="my-3" />
      <BasicSkeleton height={50} className="mt-3" />
      <div className="d-flex gap20  my-5">
        <BasicSkeleton height={40} className="mt-3" width={175} />
        <BasicSkeleton height={40} className="mt-3" width={175} />
      </div>
      <BasicSkeleton count={5} height={15} />
    </div>
  );
};
export const HomeProductListSkeleton: React.FC = () => {
  return (
    <div
      style={{ width: "269px", height: "400px", gap: "10px" }}
      className="d-flex flex-column mb-5"
    >
      <BasicSkeleton height={400} />
      <BasicSkeleton
        width={100}
        containerClassName="d-flex"
        className="mx-auto"
      />
    </div>
  );
};
export const OrderSummarySkeleton: React.FC = () => {
  return (
    <div className="d-flex mb-4">
      <BasicSkeleton height={150} width={150} />
      <div className="d-flex flex-column flex-grow-1 ms-3">
        <BasicSkeleton height={20} />
        <BasicSkeleton count={3} width={"50%"} />
      </div>
    </div>
  );
};
export const RoundLoader: React.FC = () => {
  return <div className="roundLoader" />;
};
