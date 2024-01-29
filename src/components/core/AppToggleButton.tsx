"use client";

import { useState, useEffect } from "react";
import type { BaseSyntheticEvent } from "react";
import cssModule from "@/styles/modules/components/core/AppTogglebutton.module.scss";

interface Props {
  previousValue: boolean;
  toggleFn: Function;
}

export default function AppToggleButton({
  previousValue,
  toggleFn,
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
        <label htmlFor="input"></label>
      </div>
    </div>
  );
}
