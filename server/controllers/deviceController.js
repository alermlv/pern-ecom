const { Device, DeviceInfo } = require("../models/models");
const path = require("path");
const uuid = require("uuid");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, typeId, brandId, info } = req.body;
      const { img } = req.files;
      let filename = uuid.v4() + ".webp";

      img.mv(path.resolve(__dirname, "..", "static", filename));

      const device = await Device.create({
        name,
        price,
        typeId,
        brandId,
        img: filename,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    let { typeId, brandId, limit, page } = req.query;

    limit = limit || 3;
    page = page || 1;
    let offset = page * limit - limit;

    let devices;

    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
  async delete(req, res) {
    const { id } = req.params;
    const destroyDevice = await Device.destroy({ where: { id } });
    return res.json(destroyDevice);
  }
}

module.exports = new DeviceController();
