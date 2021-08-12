const mainColors = {
    pink1 : '#E06379',
    pink2 : '#F3A8FF',
    white1 : '#FCFCFC',
    dark1 : '#112340',
    gray1 : '#7D8797',
    gray2 : '#E9E9E9',
    black1 : '#201E1E',
    
}

export const colors = {
    primary : mainColors.pink1,
    secondary : mainColors.dark1,
    white : 'white',
    black : 'black',
    border : mainColors.gray2,
    text : {
        primary : mainColors.dark1,
        secondary : mainColors.gray1,
        noActive : mainColors.black1,
        inActive : mainColors.white1,
    },
    button : {
        primary : {
            background : mainColors.pink1,
            text : 'white',
        },
        secondary : {
            background : mainColors.pink2,
            text : 'black',
        },
    },
};