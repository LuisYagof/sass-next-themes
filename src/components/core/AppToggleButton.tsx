"use client";

import { useState, useEffect } from "react";
import type { BaseSyntheticEvent } from "react";
import Image from "next/image";
import cssModule from "@/styles/modules/components/core/AppTogglebutton.module.scss";

interface Props {
  previousValue: boolean;
  toggleFn: Function;
  iconLeft?: HTMLImageElement;
  iconRight?: HTMLImageElement;
}

export default function AppToggleButton({
  previousValue,
  toggleFn,
  iconLeft,
  iconRight,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(previousValue);
  }, [previousValue]);

  function onInputChange(e: BaseSyntheticEvent) {
    setIsChecked(e.target.checked);
    toggleFn(e.target.checked);
  }

  return (
    <div className={cssModule["toggle-wrapper"]}>
      <div className={cssModule["input-wrap"]}>
        <input
          id="input"
          type="checkbox"
          checked={isChecked}
          onChange={onInputChange}
        />
        <label htmlFor="input">
          {iconLeft && (
            <Image
              src={iconLeft?.src}
              className={`${cssModule["icon"]} ${cssModule["left"]}`}
              alt=""
              width={35}
              height={44}
            />
          )}
          {iconRight && (
            <Image
              src={iconRight.src}
              className={`${cssModule["icon"]} ${cssModule["right"]}`}
              alt=""
              width={35}
              height={44}
            />
          )}
        </label>
      </div>
    </div>
  );
}
