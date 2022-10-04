export default (posts = [],action) => {
    switch (action.type ){
        case 'FETCH_ALL':
            return posts; 
        case 'CREATE':
            return posts; 
        default:
            break;
            return posts;  
    }
}
// state cant be empty, our posts are going to be in form of array so [] and our states are gonna be posts since its a post reducer so changing the variable name there