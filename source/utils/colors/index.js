const mainColors = {
    pink1 : '#E06379',
    pink2 : '#F3A8FF',
    // white1 : '#FCFCFC',
    dark1 : '#112340',
    gray1 : '#7D8797',
    gray2 : '#EEEEEE',
    gray3: '#EDFCFD',
    gray4 : '#EDEEF0',
    black1 : '#201E1E',
    green1 : '#A4EAE6',
    green2 : '#0BCAD4',
    blue1 : '#0066CB'
    
    
}

export const colors = {
    primary : mainColors.pink1,
    secondary : mainColors.dark1,
    white : mainColors.white1,
    black : 'black',
    border : mainColors.gray2,
    cardLight : mainColors.green1,
    cardText : mainColors.green2,
    disable : mainColors.gray4,
    nondisable : mainColors.blue1,
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
        disable : {
            background : mainColors.gray1,
            text : 'white',
        }
    },
};