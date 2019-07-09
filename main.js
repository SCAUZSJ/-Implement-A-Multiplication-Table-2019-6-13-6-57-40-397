
//计算并构建表格
function calculateMultiplyTable(start,end){

    let multiplyTableString = '';
    for(let i=start;i<=end;++i){
        for(let j=start;j<=i;++j){
            multiplyTableString+=`${j}x${i}=${j*i} `
        }
        multiplyTableString+="\n";
    }
    return multiplyTableString;
}
//打印表格
function printMultiplyTable(multiplyTableString){
    console.log(multiplyTableString);
}
//判断两值大小关系
function isStartLessThanEnd(start,end){
    if(statr<=end){
        return true;
    }
    return false;
}
//判断是否处于合法范围
function isNumInRange(start,end){
    if(start<1||start>1000){
        return false;
    }
    if(end<1||end>1000){
        return false 
    }
    return true;
}
//主函数
function createMultiplyTable(start,end){
    if(isStartLessThanEnd&&isNumInRange){
        printMultiplyTable(calculateMultiplyTable(start,end));
    }
    return null;
}

createMultiplyTable(2,4);

//Unit Text
// Given I two number : 2,4;
// When I use 2 and 4 to create the multiply table.
// Then I get a following multiply table ,
// 2*2=4
// 2*3=6  3*3=9
// 2*4=8  3*4=12  4*4=16