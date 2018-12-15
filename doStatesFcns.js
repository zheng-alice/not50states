// state names for hint1
var index_to_long = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

// this array determines which states border which
var border = [
    [8, 9, 23, 41],
    [],
    [4, 5, 27, 30, 43],
    [17, 23, 24, 35, 41, 42],
    [2, 27, 36],
    [2, 15, 26, 30, 35, 43, 49],
    [20, 31, 38],
    [19, 29, 37],
    [0, 9],
    [0, 8, 32, 39, 41],
    [],
    [25, 27, 36, 43, 46, 49],
    [13, 14, 16, 21, 24, 48],
    [12, 16, 21, 34],
    [12, 22, 24, 26, 40, 48],
    [5, 24, 26, 35],
    [12, 13, 24, 34, 41, 45, 47],
    [3, 23, 42],
    [28],
    [7, 37, 45, 47],
    [6, 28, 31, 38, 44],
    [12, 13, 22, 34, 48],
    [14, 21, 33, 40, 48],
    [0, 3, 17, 41],
    [3, 12, 14, 15, 16, 26, 35, 41],
    [11, 33, 40, 49],
    [5, 14, 15, 24, 40, 49],
    [2, 4, 11, 36, 43],
    [18, 20, 44],
    [7, 31, 37],
    [2, 5, 35, 42, 43],
    [6, 20, 29, 37, 38, 44],
    [9, 39, 41, 45],
    [22, 25, 40],
    [13, 16, 21, 37, 47],
    [3, 5, 15, 24, 30, 42],
    [4, 11, 27, 46],
    [7, 19, 29, 31, 34, 47],
    [6, 20, 31],
    [9, 32],
    [14, 22, 25, 26, 33, 49],
    [0, 3, 9, 16, 23, 24, 32, 45],
    [3, 17, 30, 35],
    [2, 5, 11, 27, 30, 49],
    [20, 28, 31],
    [16, 19, 32, 41, 47],
    [11, 36],
    [16, 19, 34, 37, 45],
    [12, 14, 21, 22],
    [5, 11, 25, 26, 40, 43]];

// pre-calculated ideal distances between states
// done this way to avoid needing svg info to be available to the server
var ideal = [
    [116.16818845423354, 61.378883619995975, 60.03008932315427, 74.19730901250722],
    [],
    [147.2398484012799, 154.16008291018045, 128.6513417230765, 103.39587974678255, 118.63614867935738],
    [84.4789501290636, 64.63136462635862, 79.261035023377, 116.06956933866338, 114.51798133488639, 163.79992011771327],
    [147.2398484012799, 51.26838737821843, 149.46524979251572],
    [154.16008291018045, 124.10176836178667, 113.4244305676148, 103.04920961094604, 145.65078724036357, 103.89811068626517, 94.45616795769894],
    [25.660290283565793, 56.21941722882245, 20.88471747357775],
    [31.504035705731773, 25.514820570132766, 54.527977320637376],
    [116.16818845423354, 107.07288788350165],
    [61.378883619995975, 107.07288788350165, 89.75878788434444, 44.93421933326222, 85.31666378935826],
    [],
    [84.08214315941643, 153.05616338789793, 97.25849438492241, 139.04208434305204, 99.05556244273441, 122.45709476563852],
    [54.174865888706705, 81.22310232930484, 79.2624889510244, 124.01005544192444, 58.85414735867883, 108.97936471671055],
    [54.174865888706705, 46.67672703744902, 112.73803077926564, 58.88375118198441],
    [81.22310232930484, 97.74606218609605, 82.57148253082411, 104.16394424160659, 121.51002903120441, 81.33544275529336],
    [124.10176836178667, 103.16115248391124, 70.94161431705167, 70.57334256367609],
    [79.2624889510244, 46.67672703744902, 116.02095794125864, 75.74916687161907, 41.11477993897533, 110.94698850277115, 96.70091173281413],
    [84.4789501290636, 46.62045326516354, 161.59326012051997],
    [44.16337085141993],
    [31.504035705731773, 42.047538923050645, 43.19282960017617, 50.5768963024225],
    [25.660290283565793, 37.72951001910812, 66.01542071680878, 13.109230470374362, 42.8020697979389],
    [124.01005544192444, 112.73803077926564, 115.94256303566742, 114.77864751453099, 58.43633648210937],
    [97.74606218609605, 115.94256303566742, 108.72648229452999, 116.76504855359101, 65.34167703928456],
    [60.03008932315427, 64.63136462635862, 46.62045326516354, 100.74470602447066],
    [79.261035023377, 58.85414735867883, 82.57148253082411, 103.16115248391124, 116.02095794125864, 142.8091441382007, 128.91598690323042, 123.82247680336299],
    [84.08214315941643, 140.80224726365674, 159.0047719567258, 96.32986615109763],
    [113.4244305676148, 104.16394424160659, 70.94161431705167, 142.8091441382007, 60.33505937648515, 132.32616749834077],
    [128.6513417230765, 51.26838737821843, 153.05616338789793, 138.39576066199095, 83.53626529146912],
    [44.16337085141993, 37.72951001910812, 23.260136382988463],
    [25.514820570132766, 66.92697420863551, 52.48844691010064],
    [103.39587974678255, 103.04920961094604, 136.2020657717582, 133.36605902868877, 148.89531619440677],
    [56.21941722882245, 66.01542071680878, 66.92697420863551, 61.228006088344486, 71.74952042374777, 47.66706537816957],
    [89.75878788434444, 50.429552412667036, 109.90286443308018, 49.86217100582411],
    [108.72648229452999, 140.80224726365674, 71.04099981041928],
    [58.88375118198441, 75.74916687161907, 114.77864751453099, 86.04967566191362, 55.710399636210674],
    [116.06956933866338, 145.65078724036357, 70.57334256367609, 128.91598690323042, 136.2020657717582, 95.50826061224224],
    [149.46524979251572, 97.25849438492241, 138.39576066199095, 72.51527933595544],
    [54.527977320637376, 42.047538923050645, 52.48844691010064, 61.228006088344486, 86.04967566191362, 62.79146076266425],
    [20.88471747357775, 13.109230470374362, 71.74952042374777],
    [44.93421933326222, 50.429552412667036],
    [121.51002903120441, 116.76504855359101, 159.0047719567258, 60.33505937648515, 71.04099981041928, 120.36602168272097],
    [74.19730901250722, 114.51798133488639, 85.31666378935826, 41.11477993897533, 100.74470602447066, 123.82247680336299, 109.90286443308018, 125.23274236206528],
    [163.79992011771327, 161.59326012051997, 133.36605902868877, 95.50826061224224],
    [118.63614867935738, 103.89811068626517, 139.04208434305204, 83.53626529146912, 148.89531619440677, 103.1037499027974],
    [42.8020697979389, 23.260136382988463, 47.66706537816957],
    [110.94698850277115, 43.19282960017617, 49.86217100582411, 125.23274236206528, 27.063768816676518],
    [99.05556244273441, 72.51527933595544],
    [96.70091173281413, 50.5768963024225, 55.710399636210674, 62.79146076266425, 27.063768816676518],
    [108.97936471671055, 81.33544275529336, 58.43633648210937, 65.34167703928456],
    [94.45616795769894, 122.45709476563852, 96.32986615109763, 132.32616749834077, 120.36602168272097, 103.1037499027974]];

module.exports.index_to_long = index_to_long;
module.exports.border = border;
module.exports.ideal = ideal;