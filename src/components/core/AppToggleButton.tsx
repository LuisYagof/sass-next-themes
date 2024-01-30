"use client";

import { useState, useEffect } from "react";
import type { BaseSyntheticEvent } from "react";
import Image from "next/image";
import cssModule from "@/styles/modules/components/core/AppTogglebutton.module.scss";

interface Props {
  uniqueId: string;
  toggleFn: Function;
  previousValue?: boolean;
  iconLeft?: HTMLImageElement;
  iconRight?: HTMLImageElement;
}

export default function AppToggleButton({
  uniqueId,
  toggleFn,
  previousValue,
  iconLeft,
  iconRight,
}: Props) {
  // STATE
  const [isChecked, setIsChecked] = useState<boolean>(() => {
    return previousValue !== undefined ? previousValue : false;
  });

  // LIFECYCLE
  useEffect(() => {
    if (previousValue !== undefined && previousValue !== isChecked)
      setIsChecked(previousValue);
  }, [previousValue, isChecked]);

  // FUNCTIONS
  function onInputChange(e: BaseSyntheticEvent) {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    toggleFn(newValue);
  }

  return (
    <div className={cssModule["toggle-wrapper"]}>
      <div className={cssModule["input-wrap"]}>
        <input
          id={uniqueId}
          type="checkbox"
          checked={isChecked}
          onChange={onInputChange}
        />
        <label htmlFor={uniqueId}>
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
