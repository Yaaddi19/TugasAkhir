const mainColors = {
    blue1 : '#0F1D69',
    green1 : '#0BCAD4',
    dark1 : '#112340',
    gray1 : '#7D8797',
    gray2 : '#E9E9E9',
    gray3 : '#A9AAB0',
    gray4 : '#495A75',
    
}

export const colors = {
    primary : mainColors.blue1,
    secondary : mainColors.dark1,
    white : 'white',
    black : 'black',
    border : mainColors.gray2,
    text : {
        primary : mainColors.dark1,
        secondary : mainColors.gray1,
        noActive : mainColors.gray4,
        inActive : mainColors.green1,
    },
    button : {
        primary : {
            background : mainColors.blue1,
            text : 'white',
        },
        secondary : {
            background : mainColors.gray3,
            text : 'black',
        },
    },
};