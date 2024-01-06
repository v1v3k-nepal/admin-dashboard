"use client";
import React, { SetStateAction, useCallback, Dispatch } from "react";
import "./_selectCategory.scss";

type Props = {
  categories: Com.Tcategories;
  setCategories: Dispatch<SetStateAction<Com.Tcategories>>;
  setFormData: Dispatch<SetStateAction<Com.TproductFormData>>;
};

export const SelectCategory = ({
  categories,
  setCategories,
  setFormData,
}: Props) => {
  const handleCategoryChange = useCallback(
    (id: string) => {
      const updatedData = categories?.map((item) => {
        if (item?.id === id) {
          return { ...item, isChecked: !item.isChecked };
        } else {
          return item;
        }
      });

      setCategories(updatedData);
      setFormData((prev) => ({
        ...prev,
        category: updatedData,
        // updatedData.filter((item) => item.isChecked).map((item) => item.value),
      }));
    },
    [categories]
  );

  return (
    <div className="category">
      <div className="title">Please select Product Category</div>
      <div className="checkbox-container">
        {categories?.map((item) => (
          <div key={item?.id}>
            <input
              value={item?.value}
              checked={item?.isChecked}
              id={item?.id}
              // name={item.id}
              type="checkbox"
              onChange={() => {
                handleCategoryChange(item.id);
              }}
            />
            <label htmlFor={item.id}>{item?.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
