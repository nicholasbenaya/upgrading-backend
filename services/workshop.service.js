import Workshop from "../models/workshop.model.js";

export const createWorkshopService = async (data) => {
  try {
    const workshop = new Workshop(data);
    await workshop.save();
    console.log(workshop);
    return workshop;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllWorkshopService = async () => {
  try {
    return Workshop.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const updateWorkshopByNamaService = async (nama, data) => {
  try {
    return Workshop.findOneAndUpdate(
      { nama: nama },
      { $set: data },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteWorkshopByNamaService = async (nama) => {
  try {
    return Workshop.findOneAndDelete({ nama: nama });
  } catch (error) {
    throw new Error(error);
  }
};
