import React from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
MaterialCommunityIcon.loadFont()
FontAwesomeIcon.loadFont()

export interface SortObj {
  key: string;
  label: string;
  icon: JSX.Element;
  compare: Function;
}

export const SORT_BY: Array<SortObj> = [{
  key: 'primary_release_date.desc',
  label: 'Release Date (Newest)',
  icon: (
    <MaterialCommunityIcon name={'sort-calendar-ascending'} size={25} color="#fff" />
  ),
  compare: (a: any, b: any) => {
    if (a.last_deal > b.last_deal) {
      return -1;
    } 
    if (a.last_deal < b.last_deal) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
},{
  key: 'primary_release_date.asc',
  label: 'Release Date (Oldest)',
  icon: (
    <MaterialCommunityIcon name={'sort-calendar-descending'} size={25} color="#fff" />
  ),
  compare: (a: any, b: any) => {
    
    if (a.last_deal < b.last_deal) {
      return -1;
    } 
    if (a.last_deal > b.last_deal) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
}, {
  key: 'title.asc',
  label: 'Movie Title (A - Z)',
  icon: (
    <FontAwesomeIcon name={'sort-alpha-asc'} size={25} color="#fff" />
  ),
  compare: (a: any, b: any) => {
    
    if (a.user.display_name.toLowerCase() < b.user.display_name.toLowerCase()) {
      return -1;
    } 
    if (a.user.display_name.toLowerCase() > b.user.display_name.toLowerCase()) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
},{
  key: 'title.desc',
  label: 'Movie Title (Z - A)',
  icon: (
    <FontAwesomeIcon name={'sort-alpha-desc'} size={25} color="#fff" />
  ),
  compare: (a: any, b: any) => {
    if (a.user.display_name.toLowerCase() > b.user.display_name.toLowerCase()) {
      return -1;
    } 
    if (a.user.display_name.toLowerCase() < b.user.display_name.toLowerCase()) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
},{
  key: 'vote_average.desc',
  label: 'Movie Ratings (Highest)',
  icon: (
    <FontAwesomeIcon name={'sort-amount-asc'} size={25} color="#fff" />
  ),
  compare: (a: any, b: any) => {
    
    if (a.cases < b.cases) {
      return -1;
    } 
    if (a.cases > b.cases) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
},{
  key: 'vote_average.asc',
  label: 'Movie Ratings (Worst)',
  icon: (
    <FontAwesomeIcon name={'sort-amount-desc'} size={25} color="#fff" />
  ),
  compare: (a: any, b: any) => {
    if (a.cases > b.cases) {
      return -1;
    } 
    if (a.cases < b.cases) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
}];