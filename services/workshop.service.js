let workshop = [
  { id: 1, nama: "Workshop AI", durasi: "2" },
  { id: 2, nama: "Workshop IoT", durasi: "3" },
];

export const getAllWorkshopService = () => {
    if(!workshop.length) {
        throw new Error("Tidak ada workshop ditemukan")
    }
    return workshop;
}

export const createWorkshopService = (obj) => {
    const workshopBaru = buatWorkshop(obj);
    workshop.push(workshopBaru);
    return workshopBaru;
}
// helper function
const buatWorkshop = (data = {}) => ({
    id: workshop.length + 1,
    nama: data.nama || "",
    durasi: data.durasi || ""
});

export const updateWorkshopByIdService = (id, data) => {
    const index = workshop.findIndex(ws => ws.id === parseInt(id));
    if(index == -1) return null;
    workshop[index] = {
        ...workshop[index],
        ...data
    }
    return workshop[index];
}

export const deleteWorkshopByIdService = (id) => {
    workshop = workshop.filter(ws => ws.id !== parseInt(id));
    return workshop;
}