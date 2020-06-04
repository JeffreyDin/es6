// throw new Error('new error');
// throw new ReferenceError('Ref Error'); 
// throw 1;
// throw 'not ok'; 
// throw [1,2,3]; 
// throw {'a':1};
// throw () => {}; // 函数




// throw new ReferenceError('Error')

try {
    throw new ReferenceError('Error')
    // throw Error('E1')
    // 1/0;
    // throw 'error';
    // throw 1;
} catch (e) {
    console.log(typeof e);
    console.log(e.name);
    console.log(3, e.constructor.name);
    console.log(4, e instanceof ReferenceError);

} finally {
    console.log('FIN')
}