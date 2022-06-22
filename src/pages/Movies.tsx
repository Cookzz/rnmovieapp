import React, {
  useState,
  useEffect
} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

import AppStyles from '../utils/AppStyles'
import { getMovieImageUrl } from '../utils/FormatUtils'
import { NavigationProps } from '../utils/NavigationUtils'

import { SORT_BY } from '../constants/GlobalConst'

import { useAppDispatch, useAppSelector } from '../redux/hooks'

import { getMovies, selectMovieList, selectMovieListLoading } from '../reducers/movieSlice'

const Movies: React.FC<{}> = () => {
  const [isRefreshing, setRefreshing] = useState(false)
  const [page, setPage] = useState(1)
  const [sortBySelected, setSortBySelected] = useState(SORT_BY[0])

  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProps>()
  const movieList = useAppSelector(selectMovieList)
  const movieLoading = useAppSelector(selectMovieListLoading)

  //mount sorting component first
  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> renderSortBy()
    })
  }, [])

  //rerender when state changes. not the best performing but it works
  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> renderSortBy()
    })

    //reset back to page 1
    dispatch(getMovies({
      sort_by: sortBySelected.key,
      page: 1
    }))
  }, [sortBySelected])

  useEffect(()=>{
    if (isRefreshing){
      dispatch(getMovies())
      setRefreshing(false)
    }
  }, [isRefreshing])

  useEffect(()=>{
    dispatch(getMovies({
      sort_by: sortBySelected.key,
      page: page
    }))
  }, [page])

  const renderSortBy = () => {
    return (
      <ModalSelector data={SORT_BY}
        style={AppStyles.sortContainer}
        cancelText={"Cancel"}
        onChange={(option)=>{
          setSortBySelected(option);
        }}>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          {sortBySelected?.icon}
        </View>
      </ModalSelector>
    )
  }

  const renderMovieItem = ({ item, index }: any): JSX.Element => {
    return (
      <TouchableOpacity 
        key={`movie_btn_${index}`}
        style={AppStyles.viewMovieBtn}
        onPress={()=> {
          navigation.navigate("MoviesDetails", {
            id: item.id
          })
        }}>
        <Image 
          style={{flex: 1}}
          resizeMode={'cover'}
          source={{uri: getMovieImageUrl(item.poster_path)}}
        />
        <View style={AppStyles.movieIconContainer}>
          <Text style={AppStyles.movieIconTxt}>
            {item.vote_average}
          </Text>
          <FontAwesomeIcon name="star" size={14} color={'yellow'} />
        </View>
        <View style={AppStyles.movieTxtContainer}>
          <Text style={AppStyles.movieTxt} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const onRefresh = () => {
    setRefreshing(true)
  }

  return (
    <FlatList 
      style={{flex: 1}}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
      keyExtractor={(key, index)=>`movie-item-${index}`}
      numColumns={2}
      data={movieList}
      renderItem={renderMovieItem}
      onEndReached={()=>{
        setPage(page+1)
      }}
      ListEmptyComponent={()=>(
        <View style={AppStyles.emptyContainer}>
          <Text style={AppStyles.emptyText}>
            No images available
          </Text>
        </View>
      )}
      ListFooterComponent={()=>{
        if (movieList.length > 0 && movieLoading){
          return (<ActivityIndicator size={"large"} />)
        }
        return null
      }}
    />
  )
}

export default Movies