import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/esm/ListGroup";

export const SideBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <div>Категории</div>
      <ListGroup style={{ cursor: "pointer" }} className="mt-2">
        {device.types.map((type) => (
          <ListGroup.Item
            key={type.id}
            onClick={() => device.setSelectedType(type)}
            active={type.id === device.selectedType.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="mt-4">Бренды</div>
      <ListGroup style={{ cursor: "pointer" }} className="mt-2">
        {device.brands.map((brand) => (
          <ListGroup.Item
            key={brand.id}
            onClick={() => device.setSelectedBrand(brand)}
            active={brand.id === device.selectedBrand.id}
          >
            {brand.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
});
