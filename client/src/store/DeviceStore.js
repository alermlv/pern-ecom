import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Смартфоны",
        createdAt: "2022-12-06T20:25:44.123Z",
        updatedAt: "2022-12-06T20:25:44.123Z",
      },
      {
        id: 2,
        name: "Планшеты",
        createdAt: "2022-12-06T20:26:23.434Z",
        updatedAt: "2022-12-06T20:26:23.434Z",
      },
      {
        id: 3,
        name: "Ноутбуки",
        createdAt: "2022-12-06T20:28:17.568Z",
        updatedAt: "2022-12-06T20:28:17.568Z",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Apple",
        createdAt: "2022-12-06T20:52:11.309Z",
        updatedAt: "2022-12-06T20:52:11.309Z",
      },
      {
        id: 2,
        name: "Samsung",
        createdAt: "2022-12-06T20:52:28.050Z",
        updatedAt: "2022-12-06T20:52:28.050Z",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "iPhone 13 Pro",
        price: 80000,
        rating: 0,
        img: "c39bfa09-5b3e-4f64-b7fb-ddb8aa670dbf.webp",
        createdAt: "2022-12-07T04:07:34.452Z",
        updatedAt: "2022-12-07T04:07:34.452Z",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 2,
        name: "iPhone 13 Pro Max",
        price: 90000,
        rating: 0,
        img: "855bd8e7-f72c-46f4-a651-ef33b3d66ad8.webp",
        createdAt: "2022-12-07T04:26:32.620Z",
        updatedAt: "2022-12-07T04:26:32.620Z",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 3,
        name: "iPhone 14 Pro",
        price: 100000,
        rating: 0,
        img: "01faa40b-105d-4754-acf5-ffb5acb521e7.webp",
        createdAt: "2022-12-07T04:26:51.723Z",
        updatedAt: "2022-12-07T04:26:51.723Z",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 4,
        name: "iPhone 14 Pro Max",
        price: 120000,
        rating: 0,
        img: "e8ebd975-f73a-470e-a383-798d4ada9957.webp",
        createdAt: "2022-12-07T04:27:12.490Z",
        updatedAt: "2022-12-07T04:27:12.490Z",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 5,
        name: "Samsung Galaxy S22 Ultra",
        price: 120000,
        rating: 0,
        img: "56d5f6ed-8923-4377-ba56-d5b111824daf.webp",
        createdAt: "2022-12-07T04:28:20.508Z",
        updatedAt: "2022-12-07T04:28:20.508Z",
        typeId: 1,
        brandId: 2,
      },
      {
        id: 6,
        name: "Samsung Galaxy S22",
        price: 80000,
        rating: 0,
        img: "b0155650-4fcb-4e00-9139-bef45805adb3.webp",
        createdAt: "2022-12-07T04:29:03.038Z",
        updatedAt: "2022-12-07T04:29:03.038Z",
        typeId: 1,
        brandId: 2,
      },
      {
        id: 7,
        name: "Samsung Galaxy Z Flip3",
        price: 80000,
        rating: 0,
        img: "d20513e6-8631-4db2-9d04-bc8903efd8e6.webp",
        createdAt: "2022-12-07T04:29:28.821Z",
        updatedAt: "2022-12-07T04:29:28.821Z",
        typeId: 1,
        brandId: 2,
      },
      {
        id: 8,
        name: "Samsung Galaxy Z Fold4",
        price: 120000,
        rating: 0,
        img: "3a926172-242c-4aac-97b7-d360e829ad00.webp",
        createdAt: "2022-12-07T04:29:54.915Z",
        updatedAt: "2022-12-07T04:29:54.915Z",
        typeId: 1,
        brandId: 2,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
  
  get selectedType() {
    return this._selectedType;
  }
  
  get selectedBrand() {
    return this._selectedBrand;
  }
}
