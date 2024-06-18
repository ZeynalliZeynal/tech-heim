import React, { ReactElement } from "react";

export const parseSVG = (svgString: string): ReactElement => {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  const svgElement = svgDoc.documentElement;

  // Function to recursively convert SVG elements to React elements
  const convertElement = (element: Element): ReactElement => {
    const tagName = element.tagName.toLowerCase();
    const attributes: { [key: string]: string } = {};
    for (const attr of element.attributes) {
      attributes[attr.name] = attr.value;
    }

    const children = Array.from(element.children).map(convertElement);
    return React.createElement(tagName, attributes, children);
  };

  return convertElement(svgElement);
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );
