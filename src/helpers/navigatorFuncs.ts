export const isDeviceDesktop = () => {
  const userDevice = navigator.userAgent.toLowerCase();
  return !userDevice.includes("mobile");
};
