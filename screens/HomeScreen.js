import {View, Text} from 'react-native';

import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native"

const HomeScreen = () => {
    return (
        <TailwindProvider>
        <View>
            <Text className = "text-red-800 bg-white">Home Screen here thank god</Text>
        </View>
        </TailwindProvider>
    )
}

export default HomeScreen;