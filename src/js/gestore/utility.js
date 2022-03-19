

function translateMonth(num) {
    switch(num) {
        case 0:
            return 'Gen'
        case 1:
            return 'Feb'
        case 2:
            return 'Mar'
        case 3:
            return 'Apr'
        case 4:
            return 'May'
        case 5:
            return 'Jun'
        case 6:
            return 'Jul'
        case 7:
            return 'Ago'
        case 8:
            return 'Sep'
        case 9:
            return 'Oct'
        case 10:
            return 'Nov'
        case 11:
            return 'Dec'
    }
}

function getFakeData() {

    return fakeObj = {
        sol_keys: [
            "259",
            "260",
            "261",
            "262",
            "263",
            "264",
            "265"
        ],
        "259": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        },
        "260": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        },
        "261": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        },
        "262": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        },
        "263": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        },
        "264": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        },
        "265": {
            AT: {
                av: -71.233,
                ct: 326642,
                mn: -101.024,
                mx: -27.149
            },
            HWS: {
                av: 4.35,
                ct: 154146,
                mn: 0.156,
                mx: 17.617
            },
            PRE: {
                av: 761.006,
                ct: 163012,
                mn: 742.1498,
                mx: 780.3891
            }
        }
    };
}

export {translateMonth,getFakeData}