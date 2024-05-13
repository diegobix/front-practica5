import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { FilterType, FilterValuesType } from "../types.ts";
import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";

const Filter: FunctionComponent<
  { filter: Signal<FilterType>; values: FilterValuesType }
> = ({ filter, values }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    globalThis.addEventListener("scroll", () => {
      if (globalThis.scrollY >= 50) setScrolled(true);
      else setScrolled(false);
    });
  }, []);

  const handleColor = (e: JSX.TargetedInputEvent<HTMLSelectElement>) => {
    const color = e.currentTarget.value;
    if (color === "any") {
      filter.value = { ...filter.value, color: undefined };
    } else if (color === "true") {
      filter.value = { ...filter.value, color: true };
    } else {
      filter.value = { ...filter.value, color: false };
    }
  };

  return (
    <div class={scrolled ? "filter scrolled" : "filter"}>
      <div class="search">
        <input
          type="text"
          name="name"
          id="name"
          value={filter.value.name}
          onInput={(e) =>
            filter.value = { ...filter.value, name: e.currentTarget.value }}
        />
        <i class="fa-solid fa-magnifying-glass" id="searchIcon"></i>
      </div>
      <select
        name="brand"
        id="brand"
        onInput={(e) =>
          filter.value = { ...filter.value, brand: e.currentTarget.value }}
      >
        <option value="">Any</option>
        {values.brands.map((brand) => <option value={brand}>{brand}</option>)}
      </select>
      <select
        name="iso"
        id="iso"
        onInput={(e) =>
          filter.value = { ...filter.value, iso: e.currentTarget.value }}
      >
        <option value="">Any</option>
        {values.isos.map((iso) => <option value={iso}>{iso}</option>)}
      </select>
      <div class="format">
        <div id="item">
          <span>
            Thirty Five
          </span>
          <input
            onChange={(e) =>
              filter.value = {
                ...filter.value,
                formatThirtyFive: e.currentTarget.checked,
              }}
            type="checkbox"
            name="formatThirtyFive"
            id="formatThirtyFive"
            checked={filter.value.formatThirtyFive || false}
          />
        </div>
        <div id="item">
          <span>
            One Twenty
          </span>
          <input
            onChange={(e) =>
              filter.value = {
                ...filter.value,
                formatOneTwenty: e.currentTarget.checked,
              }}
            type="checkbox"
            name="formatOneTwenty"
            id="formatOneTwenty"
            checked={filter.value.formatOneTwenty || false}
          />
        </div>
      </div>
      <select
        name="color"
        id="color"
        onInput={handleColor}
      >
        <option value="any" selected>Any</option>
        <option value="true">Color</option>
        <option value="false">B&W</option>
      </select>
    </div>
  );
};

export default Filter;
