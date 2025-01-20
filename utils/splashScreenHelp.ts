import * as SplashScreen from "expo-splash-screen";

export const hideSplashScreen = async (dataLoaded:boolean) => {
    console.log('this is HIDE SPLASH:', dataLoaded);
    const minDisplayTime = 5000;
    
    if (dataLoaded) {
        await new Promise((resolve) => setTimeout(resolve, minDisplayTime));
        await SplashScreen.hideAsync();
        console.log('Splash screen hidden');
    }
};

