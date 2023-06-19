import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 15, 
        backgroundColor: "#f5f5f5"
    },
    input: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 10,
        backgroundColor: "#fff", 
        borderRadius: 30, 
        marginTop: 8,
        marginBottom: 8
    },
    welcome:{
        fontFamily: FONT.bold,
        fontSize: SIZES.xxLarge,
        fontWeight:900,
        color: COLORS.primary,
        marginTop:15
    },
    welcomeImage:{
        width:"100%",
        height:"50%"
    },
    txtMedium:{
        fontSize: SIZES.medium,
        marginTop: 8,
        marginBottom:8
    },
    nextBtn:{
        width: "100%",
        borderRadius: 8, 
        height: 60, 
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: COLORS.primary
    },
    logo:{
        width:180,
        height:110
    },
    titleLarge:{
        fontSize: SIZES.xLarge, 
        fontWeight:600,
        marginTop: 8,
        marginBottom:8
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    }
});

export default styles;
