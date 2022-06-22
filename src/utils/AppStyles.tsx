import { StyleProp } from "react-native"

const styles: StyleProp<any> = {
  container: {
		flex: 1,
  },
	paddedContainer: {
		flex: 1,
		padding: 20
	},
	sortContainer: {
		width: 40,
		marginLeft: 10,
		marginRight: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	sectionContainer: {
		marginTop: 10
	},
	movieTxtContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		paddingRight: 5,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	movieIconContainer: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: 50,
		top: 0,
		right: 0,
		padding: 5,
		backgroundColor: 'rgba(0, 0, 0, 1)'
	},
	ratingContainer: {
		flex: 0, 
		alignItems:'flex-end', 
		justifyContent: "center"
	},
	tagsContainer: {
		flexDirection: "row", 
		flexWrap: "wrap"
	},
	emptyContainer: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		padding: 20
	},

  viewMovieBtn: {
		minHeight: 300,
		height: '33%',
		flex: 0.5,
		backgroundColor: '#000',
		borderWidth: 1,
		borderColor: '#fff',
		margin: 5,
		justifyContent: 'center',
	},
	movieTxt: {
		fontSize: 20,
		fontWeight: '700',
		color: '#fff'
	},
	movieIconTxt: {
		fontSize: 14,
		paddingRight: 3,
		color: '#fff'
	},
	movieTags: {
		fontSize: 14, 
		marginTop: 5, 
		marginBottom: 5,
		marginRight: 5,
		padding: 5, 
		borderRadius: 20, 
		backgroundColor: "#db1f48", 
		color: "white"
	},
	secondaryTags: {
		fontSize: 14, 
		marginTop: 5, 
		marginBottom: 5,
		marginRight: 5,
		padding: 5, 
		borderRadius: 20, 
		backgroundColor: "#A30000", 
		color: "white"
	},
	movieTitle: {
		fontSize: 21, 
		fontWeight:"900"
	},

	ratingSubContainer: {
		flexDirection:"row", 
		alignItems: "center"
	},
	ratingTxt: {
		fontSize: 18, 
		paddingRight: 5
	},

  emptyText: {
		fontSize: 18,
		textAlign: 'center'
	},

	submitBtn: {
		width: "100%", 
		backgroundColor: "#db1f48",
		padding: 20, 
		borderRadius: 10
	},
	submitTxt: {
		textAlign: "center", 
		color: "white",
		fontSize: 18
	},

	detailsImage: {
		width: "100%", 
		height: 200
	}
}

export default styles