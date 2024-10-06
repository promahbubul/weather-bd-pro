import {useState} from 'react';

const useWindDirection = () => {
    const [direction, setDirection] = useState('');

    const getWindDirection = (degree) => {
        if (degree < 0 || degree >= 360) {
            setDirection("অবৈধ ইনপুট। 0 থেকে 359 এর মধ্যে একটি মান প্রবেশ করুন।");
            return;
        }

        if (degree >= 0 && degree < 22.5) setDirection("উত্তর (0°)");
        else if (degree < 67.5) setDirection("উত্তর-পূর্ব (45°)");
        else if (degree < 112.5) setDirection("পূর্ব (90°)");
        else if (degree < 157.5) setDirection("দক্ষিণ-পূর্ব (135°)");
        else if (degree < 202.5) setDirection("দক্ষিণ (180°)");
        else if (degree < 247.5) setDirection("দক্ষিণ-পশ্চিম (225°)");
        else if (degree < 292.5) setDirection("পশ্চিম (270°)");
        else if (degree < 337.5) setDirection("উত্তর-পশ্চিম (315°)");
        else setDirection("উত্তর (360°)");
    };

    return {direction, getWindDirection};
};

export default useWindDirection;
