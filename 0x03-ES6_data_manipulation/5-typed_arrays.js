export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataV = new DataView(buffer);

  // verify if position outside range
  if (position >= length) throw new Error('Position outside range');
  // set new value
  dataV.setInt8(position, value);
  
  return dataV;
}
