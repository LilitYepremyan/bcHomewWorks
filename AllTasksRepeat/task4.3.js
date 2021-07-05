const getThirdCornerTriangle = (corner1, corner2) => {
  const checkCorner1 = typeof corner1 === "number" && !Number.isNaN(corner1);
  const checkCorner2 = typeof corner2 === "number" && !Number.isNaN(corner2);
  const checkSum = corner1 + corner2 < 180;
  const checkToPositive = corner1 > 0 && corner2 > 0;
  if (checkCorner1 && checkCorner2 && checkToPositive && checkSum) {
    return 180 - corner1 - corner2;
  }
  return "Error";
};
console.log(getThirdCornerTriangle(150, 90));
