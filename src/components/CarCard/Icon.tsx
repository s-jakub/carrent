import React from "react";

type IIcon = {
  children: JSX.Element;
  description: string;
};

const Icon = ({ children, description }: IIcon) => {
  return (
    <div className="icon-wrapper">
      <div className="icon-wrapper__icon">{children}</div>
      <div className="icon-wrapper__description">{description}</div>
    </div>
  );
};

export default Icon;
