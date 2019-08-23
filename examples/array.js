// let array = new Array(1,2,3,4);

// console.log(array) // [ 1, 2, 3, 4 ]

// 1. concat
/**
 * array1.concat(items)
 * 连接多个数组或元素，返回连接后的新的数组，不会改变原数组 --- 参数是数组，会减少一级数组嵌套深度，将数组内容进行连接。
 * @param items 以是具体的值，也可以是数组对象。可以是任意多个
 */
// let a = [1,2,3];
// let b = [4,5];

// let c = a.concat(b);
// let d = a.concat([[1,2,[3]]]);

// console.log(a) // [ 1, 2, 3 ]
// console.log(c) // [ 1, 2, 3, 4, 5 ]
// console.log(d) // [ 1, 2, 3, [ 1, 2, [ 3 ] ] ]

// 2. copyWithin
/**
 * array.copyWithin(target, start, end)
 * 从数组的指定位置拷贝元素到数组的另一个指定位置中
 * @param target 负数，表示长度加上负数的值
 * @param start  起始位置
 * @param end 停止复制的索引位置，与起始位置相同就说明都不变，负数表示倒数
 */

// let a = ['a','b','c','d','e'];
// a.copyWithin(2,1)
// console.log(a) // [ 'a', 'b', 'b', 'c', 'd' ]

// a.copyWithin(2,1,1);
// console.log(a) // [ 'a', 'b', 'c', 'd', 'e' ]

// a.copyWithin(2,1,2);
// console.log(a) // [ 'a', 'b', 'b', 'd', 'e' ]

// a.copyWithin(2,3,-1);
// console.log(a) // [ 'a', 'b', 'd', 'd', 'e' ]

// 3. entries
/**
 * 返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)
 * 数组的索引值作为 key， 数组元素作为 value
 */

// let a = ["a", "b", "c"];
// let b = a.entries();
// for(item of b) {
//   console.log(item)
// }
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]

// 4. every

/**
 * 用于检测数组所有元素是否都符合指定条件， 返回 布尔值
 * @param callbackfn 检测函数
 * @param thisArg 可选 this指向
 */
// let a = [1, 2, 3, 4, 5];
// let b = { value: 0 };
// console.log(a.every(item => item > 2)); // false
// console.log(a.every(item => item > 0)); // true
// console.log(
// 	a.every(function(item) {
//     return item > this.value
// 	}, b)
// ); // true

// 5. fill
/**
 * 使用固定值填充数组
 * array.fill(value, start, end)
 * @param value  填充的值
 * @param start 开始填充位置
 * @param end 停止填充位置 (默认为 array.length)
 */
// let a = [1,2,3,4];

// a.fill(3);
// console.log(a); //[ 3, 3, 3, 3 ]

// a.fill(3, 1, 3)
// console.log(a) // [ 1, 3, 3, 4 ]

// 6. filter
/**
 * 筛选符合条件的元素，返回一个新数组
 * @param callbackfn 检测函数
 * @param thisArg  可选 this指向
 */
// let a = [1, 2, 3, 4, 5, 6, 9];
// let b = a.filter(item => item > 4);
// console.log(a); // [ 1, 2, 3, 4, 5, 6, 9 ]
// console.log(b) // [ 5, 6, 9 ]

// 7. find

/**
 * 返回通过测试（函数内判断）的数组的第一个元素的值
 * array.find(function(currentValue, index, arr),thisValue)
 */

// var a = [1,23,23,41,5,8];
// let b = a.find(item => item > 23);
// let c = a.find(item => item > 2);
// console.log(b) // 41
// console.log(c) // 23

// 8. findIndex
/**
 * 返回传入一个测试条件（函数）符合条件的数组第一个元素位置, 找不到返回-1
 * array.findIndex(function(currentValue, index, arr), thisValue)
 */

// let a = [1,23,23,41,5,8];
// let b = a.findIndex(item => item > 23);
// console.log(b) //3

// 9. forEach
/**
 * 调用数组的每个元素，并将元素传递给回调函数
 * @param callbackfn
 * @param thisArg
 */
// let a = [2,3,54,6,8];
// a.forEach((item,index) => {
//   console.log(`${index}: ${item}`)
// })
// console.log(a) //[ 2, 3, 54, 6, 8 ]
// 0: 2
// 1: 3
// 2: 54
// 3: 6
// 4: 8

// 10. flat
/**
 * arr.flat(depth)
 * @param depth  指定要提取嵌套数组的结构深度，默认值为 1
 */
// let a = [1,2,3, [1,2]]
// let b = a.flat(1);
// console.log(b) // [1, 2, 3, 1, 2]

// //使用 Infinity 作为深度，展开任意深度的嵌套数组
// let arr = [1, [2,3, [4]]];
// let depArr = arr.flat(Infinity)
// console.log(depArr) // [1, 2, 3, 4]

// 11. flatMap
/**
 * @param callback
 * @param thisArg
 */

// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1.flatMap(x => [x * 2]);
// console.log(arr2)
// // [2, 4, 6, 8]

// let arr3 = arr1.flatMap(x => [[x * 2]]);
// console.log(arr3)
// [[2], [4], [6], [8]]

// 12. from
/**
 * 通过拥有 length 属性的对象或可迭代的对象来返回一个数组
 * Array.from(object, mapFunction, thisValue)
 * @param object 要转换为数组的对象
 * @param mapFunction 可选 执行函数
 */
// let a = Array.from('this is');
// let b = Array.from(new Set().add(1).add(2));
// let c = Array.from(2);
// let d = Array.from([1,2]);
// let e = Array.from(true);
// let f = Array.from({a: 1});
// let g = Array.from([1,2,3], item => item * 2);
// console.log(a) // [ 't', 'h', 'i', 's', ' ', 'i', 's' ]
// console.log(b) // [ 1, 2 ]
// console.log(c) // []
// console.log(d) // [ 1, 2 ]
// console.log(e) // []
// console.log(f) // []
// console.log(g) // [ 2, 4, 6 ]

// 13. inclues
/**
 * 判断一个数组是否包含一个指定的值
 * arr.includes(searchElement, fromIndex)
 * @param fromIndex 开始的索引
 */
// console.log([1, 2, 3].includes(2)) // true
// console.log([1, 2, 3].includes(2, 2)) // false

// 14. indexOf

/**
 * 返回数组中某个指定的元素位置, 找不到返回-1
 * arr.indexOf(searchElement, fromIndex)
 * @param fromIndex 开始的索引
 */

// let a = ["a", "b", "c", "d"];
// let b = a.indexOf("b");
// console.log(b) // 1

// 15. isArray
/**
 * 判断一个对象是否为数组, 返回布尔值
 */
// let a = [1, 2];
// let b = 1;
// console.log(Array.isArray(a)); // true
// console.log(Array.isArray(b)); // false

// 16. join
/**
 * array.join(separator)
 * 返回一个字符串,将数组中所有元素通过指定分隔符连接而成
 *  @param separator  可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符
 */
// let a = [1,2,'c'];

// console.log(a.join('_')) // 1_2_c

// 17. keys
/**
 * 创建一个数组迭代对象， 该对象包含了数组的键
 */

//  let a = ['b','c','e'];
//  for(item of a.keys()) {
//    console.log(item)
//  }
// 0
// 1
// 2

//  18. lastIndexOf

/**
 * 返回数组中某个指定的元素最后位置, 找不到返回-1
 * arr.lastIndexOf(searchElement, fromIndex)
 * @param fromIndex 开始的索引
 */

// let a = ["a", "b", "b", "e", "b", "c", "d"];
// let b = a.lastIndexOf("b");
// console.log(b); // 4

// 19. map
/**
 * 返回一个新数组，数组中的元素为原数组元素调用函数处理后的值。
 * @param callbackfn
 * @param thisArg
 */
// let a = [1, 2, 3];
// let b = a.map(item => item * 2);
// console.log(a); // [ 1, 2, 3 ]
// console.log(b); // [ 2, 4, 6 ]

// 20. pop
/**
 * 移除数组最后一项并返回它的值
 */
// let a = [1, 2, 3, 4];
// let b = a.pop();
// console.log(a); // [ 1, 2, 3 ]
// console.log(b); // 4

// 21. push
/**
 * 在数组末尾添加新的元素，并返回新的长度
 */
// let a = [1, 2, 3, 5];
// let b = a.push(4);
// console.log(a); // [ 1, 2, 3, 5, 4 ]
// console.log(b); // 5

// 22. reduce
/**
 * 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
 * @param callbackfn(previousValue: 初始值, 或者计算结束后的返回值, currentValue: 当前元素, currentIndex: 当前元素索引, array: 当前元素所属的数组对象)
 * @param initialValue 传递给函数的初始值
 */
// let a = [1, 3, 4, 6, 8];
// console.log(
// 	a.reduce((previousValue, currentValue) => previousValue + currentValue)
// ); // 22

// 23. reduceRight
/**
 * 和reduce唯一不同是从右向左计算
 */
// let a = [1, 3, 4, 6, 8];
// console.log(
// 	a.reduceRight((previousValue, currentValue, currentIndex) => {
// 		console.log(`${currentIndex} 值为: ${currentValue}`);
// 		return previousValue + currentValue;
// 	})
// );
// 3 值为: 6
// 2 值为: 4
// 1 值为: 3
// 0 值为: 1
// 22

// 24. reverse
/**
 * 反转数组中元素的顺序
 */
// let a = ["a", "b", "c"];
// console.log(a.reverse()); // [ 'c', 'b', 'a' ]
// console.log(a); // [ 'c', 'b', 'a' ]

// 25. shift
/**
 * 把数组的第一个元素从其中删除，并返回第一个元素的值
 */
// let a = [1, 2, 3];
// let b = a.shift();
// console.log(a); // [ 2, 3 ]
// console.log(b); // 1

// 26. unshift
/**
 * 向数组的开头添加一个或更多元素，并返回新的长度
 * @param items
 */
// let a = [1, 2, 3];
// let b = a.unshift(2, [3]);
// console.log(a); // [ 2, [ 3 ], 1, 2, 3 ]
// console.log(b); // 5

// 27. slice
/**
 * slice(start?: number, end?: number)
 * 从已有的数组中返回选定的元素
 * @param start 开始选取的索引
 * @param end 停止选取的索引，即不包含此项元素
 */
// let a = ["bana", "org", "ap", "mag"];
// let b = a.slice(1, 3);

// console.log(a); // [ 'bana', 'org', 'ap', 'mag' ]
// console.log(b); // [ 'org', 'ap' ]

// 28. some
/**
 * 检测数组中的元素是否满足指定条件（函数提供）,如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测, 如果没有满足条件的元素，则返回false
 * @param callbackfn
 * @param thisArg
 */
// let a = [23,4,5,78];
// console.log(a.some(item => item > 80)); // false
// console.log(a.some(item => item > 40)); // true

// 29. sort
/**
 * sort(compareFn?: (a: T, b: T) => number)
 * 于对数组的元素进行排序,排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序
 * 使用数字排序，你必须通过一个函数作为参数来调用
 */
// let points = [40, 100, 1, 5, 25, 10];
// let arr = ["ab", "ar", "item", "hello"];
// points.sort((a, b) => b - a);
// arr.sort();
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
// console.log(arr); //[ 'ab', 'ar', 'hello', 'item' ]

// 30. splice
/**
 * splice(start: number, deleteCount: number, ...items: T[])
 * 用于添加或删除数组中的元素，返回值为删除的元素组成的数组
 */
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let refr = fruits.splice(0,1); // 删除一个元素
// console.log(fruits) // [ 'Orange', 'Apple', 'Mango' ]
// console.log(refr) // [ 'Banana' ]

// let refr1 = fruits.splice(0,0,'addBan'); // 添加一个元素
// console.log(fruits) // [ 'addBan', 'Orange', 'Apple', 'Mango' ]
// console.log(refr1) // []

// 31. toString
/**
 * 可把数组转换为字符串，并返回结果, 数组中的元素之间用逗号分隔
 */
// let a = ["hello", "world"];
// let b = a.toString();

// console.log(a); // ['hello', 'world']
// console.log(b); // hello,world

// 32. values
/**
 * 获取数组的元素值, 返回一个可迭代对象
 */
// let a = ["hello", "world"];
// for(item of a.values()) {
//   console.log(item)
// }
// hello
// world

//改变原数组的方法
// 1. copyWithin 
// 2. fill
// 3. pop
// 4. push
// 5. reverse
// 6. shift
// 7. unshift
// 8. sort
// 9. splice

// 不改变
// 1. concat
// 2. flat flatMap
// 3. map
// 4. slice
// 5. toString

// 遍历
// every 
// filter
// forEach
// map
// some

// 查找
// find
// findIndex
// includes
// indexOf
// lastIndexOf