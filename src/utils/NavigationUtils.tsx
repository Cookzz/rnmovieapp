import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
    Movies: undefined
    MoviesDetails: { id: number },
    BookingPage: undefined
}

export type NavigationProps = NativeStackNavigationProp<StackParamList>