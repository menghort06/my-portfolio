import { computed } from "vue";

type Coordinates = {
  lat: number;
  lng: number;
};
const location: Coordinates = {
  lat: 11.644542,
  lng: 104.866549
};
export const getCurrentMapLink = computed(() => {
  return `https://www.google.com/maps?q=${location.lat},${location.lng}`;
});

export const getMapUrl = computed(() => {
  return `https://www.google.com/maps?q=${location.lat},${location.lng}&z=13&output=embed`;
});