import DeviceDetector from 'device-detector-js';

const deviceDetector = new DeviceDetector();

export const detectDeviceType = (userAgent: string) => {
    try {
        if(!process.browser){
            const { device } = deviceDetector.parse(userAgent);
            return {
                isMobile: device.type === "smartphone"
            };
        }
    } catch (error) {
        throw new Error('Failed to detect device type');
    }
}