export default function getHSLByPercentage(percent) {
  const value = percent / 100;
  const hueValue = value * 120;
  const hue = hueValue >= 60
    ? hueValue + 20
    : hueValue < 10 
      ? 0
      : hueValue - 10
  return `hsl(${hue}, 100%, 50%)`;
}