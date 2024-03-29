import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param { ImageGridProps }
 */
const ImageGrid = ({ slice }) => (
  <section>
    <pre>{JSON.stringify(slice, null, 2)}</pre>
  </section>
);

export default ImageGrid;
