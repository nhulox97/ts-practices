interface RGBColor {
  r: number;
  g: number;
  b: number;
}

// TODO: Implement function hexToRGB
export function hexToRGB(hex: string): RGBColor {
  if (hex.length === 3) {
    const hr = hex[0];
    const hg = hex[1];
    const hb = hex[2];
    return hexToRGB(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }
  const [r, g, b] = [0, 2, 4]
    .map((offset) => hex.substring(offset, offset + 2))
    .map((hexhCh) => parseInt(hexhCh, 16));

  return { r, g, b };
}

// TODO: Implement function rgbToHex
export function rgbToHex(rgb: RGBColor): string {
  return [rgb.r, rgb.g, rgb.b]
    .map((decCh) => Math.max(0, Math.min(255, decCh)).toString(16))
    .map((hexCh) => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
    .join('');
}

// console.log(rgbToHex({ r: 255, g: 10, b: 100 }));
console.log(hexToRGB('ff0a64'));
