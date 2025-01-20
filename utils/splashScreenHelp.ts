import * as SplashScreen from "expo-splash-screen";

export const hideSplashScreen = async (dataLoaded:boolean) => {
    const minDisplayTime = 2000;
    
    if (dataLoaded) {
        await new Promise((resolve) => setTimeout(resolve, minDisplayTime));
        await SplashScreen.hideAsync();
    }
};

