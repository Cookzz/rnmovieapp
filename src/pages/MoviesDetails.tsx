import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { useQuery } from 'react-query'
import { useNavigation } from '@react-navigation/native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { GET_MOVIE_DETAILS } from '../constants/APIConst'

import AppStyles from '../utils/AppStyles'
import { fetchAPI } from '../utils/APIUtils'
import { convertMinutesToTime, getMovieImageUrl } from '../utils/FormatUtils'
import { NavigationProps } from '../utils/NavigationUtils'

const MoviesDetails: React.FC<{}> = (props: any) => {
  const navigation = useNavigation<NavigationProps>()

  const { isLoading, error, data } = useQuery(`movie-details-${props?.route?.params?.id}`, async() => {
    return await fetchAPI(`${GET_MOVIE_DETAILS}/${props?.route?.params?.id}`)
  })

  if (isLoading){
    return (
      <View style={AppStyles.emptyContainer}>
        <ActivityIndicator size={"large"} />
        <Text style={AppStyles.emptyText}>
          Loading...
        </Text>
      </View>
    )
  }

  if (!data){
    return (
      <View style={AppStyles.emptyContainer}>
        <Text style={AppStyles.emptyText}>
          No details are found.
        </Text>
      </View>
    )
  }

  //show movies details
  return (
    <View style={AppStyles.container}>
      <ScrollView style={{flex: 1}}>
      <Image 
        style={AppStyles.detailsImage} 
        resizeMode={'cover'} 
        source={{ uri: getMovieImageUrl(data.data.backdrop_path) }} 
      />
      <View style={{flex: 1, flexDirection: "column"}}>
        <View style={AppStyles.paddedContainer}>
          {/* top section */}
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={AppStyles.movieTitle}>{data.data.title}</Text>
              <View style={{flex: 1}}>
                <View style={AppStyles.tagsContainer}>
                  {
                    data.data.genres.map((genre: any, index: number) => (
                      <Text key={`genre_${index}`} style={AppStyles.movieTags}>{genre.name}</Text>
                    ))
                  }
                  {
                    data.data.spoken_languages.map((language: any, index: number) => (
                      <Text key={`language_${index}`} style={AppStyles.secondaryTags}>{`Language: ${language.english_name}`}</Text>
                    ))
                  }
                </View>
              </View>
            </View>
            <View style={AppStyles.ratingContainer}>
              <View style={AppStyles.ratingSubContainer}>
                <Text style={AppStyles.ratingTxt}>{data.data.vote_average}</Text>
                <FontAwesomeIcon name="star" size={18} color={'orange'} />
              </View>
              <View style={AppStyles.ratingSubContainer}>
                <Text style={AppStyles.ratingTxt}>{convertMinutesToTime(data.data.runtime)}</Text>
                <MaterialCommunityIcon name="clock-outline" size={18} color={'black'} />
              </View>
            </View>
          </View>
          {/* top section */}

          <View style={AppStyles.sectionContainer}>
            <Text style={AppStyles.movieTitle}>Sypnosis</Text>
            <Text>{data.data.overview}</Text>
          </View>
        </View>
        <View style={[AppStyles.paddedContainer]}>
          <TouchableOpacity style={AppStyles.submitBtn} onPress={()=>{
            navigation.navigate("BookingPage")
          }}>
            <Text style={AppStyles.submitTxt}>BOOK</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default MoviesDetails