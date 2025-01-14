import { View, Text } from "react-native";

type PrimaryButtonProps = {
    children: string;
}

export default function PrimaryButton({children}: PrimaryButtonProps) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}