
const printer = function ( array ) {
    for ( let i = 0; i < array.length; i++ ) {
        console.log( array[ i ] );
    }
}


const makeNumArray = function ( start, end ) {
    const newArray = []
    for ( let i = start; i <= end; i++ )
        newArray.push( i )
}


let array = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
const printManyNums = function () {
    let makeNumArray = array
    let randomArray = [ 2, 3, 5, 2, 2 ]
    let allNums = []
    for ( let i = 0; i < makeNumArray.length; i++ ) {
        allNums.push( makeNumArray[ i ] )
    }
    for ( let j = 0; j < randomArray.length; j++ ) {
        allNums.push( randomArray[ i ] )
    }
    console.log( allNums )
}

printManyNums()


const printManyNames = function () {
    let peopleI = [ "a", "b", "c" ]
    let peoplePartner = [ "n", "m", "l" ]
    let allNames = []
    for ( let i = 0; i < peopleI.length; i++ ) {
        allNames.push( peopleI[ i ] )
    };
    for ( let j = 0; j < peoplePartner.length; j++ ) {
        allNames.push( peoplePartner[ i ] )
    }
    console.log( allNames )
}
printManyNames()

const printMiddleNums = function () {
    makeNumberArray = []
    for ( let i = 0; i <= 50; i++ ) {
        makeNumberArray.push( i )
        console.log( makeNumberArray.slice( 25, 35 ) );

    }
    printMiddleNums()

    const printLastNums = function () {
        let array = [ -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ]
        const newArray = array.slice( 0, 12 )
        console.log( newArray )
    }
    printLastNums()


    const removeMiddle = function () {
        bandArray = [ "kh", "djei", "dd", "de", "df" ]
        bandArray.splice( 2, 1 )
        console.log( bandArray )
    }
    removeMiddle()

    const replaceSecond = function () {
        let sportArray = [ 'Tax', 'NY', 'US', 'SP' ]
        sportArray.splice( 1, 1, 'DD' )
        console.log( sportArray )
    }
    replaceSecond()
