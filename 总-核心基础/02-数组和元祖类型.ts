// 数组类型
// 方式一
// 需求: 要求定义一个数组, 这个数组中将来只能存储数值类型的数据
let arr1:Array<number>; // 表示定义了一个名称叫做arr1的数组, 这个数组中将来只能够存储数值类型的数据
arr1 = [1, 3, 5];
// arr1 = ['a', 3, 5]; // 报错
console.log(arr1);

// 方式二
// 需求: 要求定义一个数组, 这个数组中将来只能存储字符串类型的数据
let arr2:string[]; // 表示定义了一个名称叫做arr2的数组, 这个数组中将来只能够存储字符串类型的数据
arr2 = ['a', 'b', 'c'];
// arr2 = [1, 'b', 'c']; // 报错
console.log(arr2);

// 联合类型
let arr3:(number | string)[];// 表示定义了一个名称叫做arr3的数组, 这个数组中将来既可以存储数值类型的数据, 也可以存储字符串类型的数据
arr3 = [1, 'b', 2, 'c'];
// arr3 = [1, 'b', 2, 'c', false]; // 报错
console.log(arr3);

// 任意类型
let arr4:any[]; // 表示定义了一个名称叫做arr4的数组, 这个数组中将来可以存储任意类型的数据
arr4 = [1, 'b', false];
console.log(arr4);

// 元祖类型
// TS中的元祖类型其实就是数组类型的扩展
// 元祖用于保存定长定数据类型的数据
let arr5:[string, number, boolean]; // 表示定义了一个名称叫做arr5的元祖, 这个元祖中将来可以存储3个元素, 第一个元素必须是字符串类型, 第二个元素必须是数字类型, 第三个元素必须是布尔类型
arr5 = ['a', 1, true];
// arr5 = ['a', 1, true, false]; // 超过指定的长度会报错
arr5 = ['a', 1, true];
console.log(arr5);

