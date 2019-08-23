// 1. charAt
/**
 * 返回指定位置的字符
 * @param pos
 */
// let str = 'this is string';

// console.log(str.charAt(2)); // i

// 2. charCodeAt
/**
 * 返回指定位置的字符的Unicode 编码
 * @param index
 */
// let str = 'this is string';
// console.log(str.charCodeAt(2)); // 105

// 3. codePointAt
/**
 * 返回指定位置的字符的 Unicode utf-16 字符的码位
 * @param pos
 */
// let str = 'this is string';
// console.log(str.codePointAt(2)) // 105

// 4. concat
/**
 * 返回连接后的新字符串
 * @param strings
 */
// let str = "hello";
// let str2 = str.concat(",world");
// let str3 = str.concat("_", "world");
// console.log(str2); // hello,world
// console.log(str3); // hello_world

// 5. endsWith
/**
 * endsWith(searchString: string, endPosition?: number) : boolean
 * 是否是指定字符结尾，可指定结束搜索的位置，返回布尔值
 */
// let str = "hello";
// console.log(str.endsWith("e")); //false
// console.log(str.endsWith("o")); //true

// 6. includes
/**
 * 是否包含指定的子字符串
 * @param searchString
 * @param position 默认0，开始搜索的索引
 */
// let str = 'hello';
// console.log(str.includes('el',3)) //false
// console.log(str.includes('el',1)) //true

// 7. indexOf
/**
 * indexOf(searchString: string, position?: number): number
 * 返回某个指定的字符串值在字符串中首次出现的位置索引
 */
// let str = 'hello world'
// console.log(str.indexOf('o')) // 4
// console.log(str.indexOf('o', 5)) // 7
// console.log(str.indexOf('m')) // -1

// 8. lastIndexOf
/**
 * lastIndexOf(searchString: string, position?: number): number
 * 返回某个指定的字符串值在字符串中首次出现的位置索引，从右往左开始查找
 */
// let str = 'hello world'
// console.log(str.lastIndexOf('o')) // 7
// console.log(str.lastIndexOf('o', 5)) // 4
// console.log(str.lastIndexOf('m')) // -1

// 9. match
/**
 * @param matcher An object that supports being matched against
 * 返回存放匹配结果的数组
 */
// let str = "hello world";
// let mat = str.match("he");
// console.log(mat); // [ 'he', index: 0, input: 'hello world' ]
// let str2 = 'hello, he is my girlfriend';
// let reg = str2.match(/he/g)
// let reg2 = str2.match(/\w{5}/g)
// console.log(reg) //[ 'he', 'he' ]
// console.log(reg2) //[ 'hello', 'girlf', 'riend' ]

// 10. repeat
/**
 * 返回复制指定次数并连接在一起的字符串
 * @param count number of copies to append
 */
// let str = 'hello';
// console.log(str.repeat(2)) // hellohello
// console.log(str) // hello

// 11. replace
/**
 * 使用指定字符替换原有指定字符
 * @param searchValue 搜索的子字符串或reg对象
 * @param replacer 替换的文本或者返回替换文本的函数
 */
// let str = 'hello world, this is my string';
// let str1 = str.replace('string', 'world');
// console.log(str) // hello world, this is my string
// console.log(str1) // hello world, this is my world

// let str2 = str.replace(/\s/g, '_');
// console.log(str2) // hello_world,_this_is_my_string

// 12. search
/**
 * 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，没有就返回 -1
 * @param searcher
 */
// let str = 'hello this is search';
// let str1 = str.search('this')
// let str2 = str.search(/is/g)
// console.log(str1) // 6
// console.log(str2) // 8

// 13. slice
/**
 * slice(start?: number, end?: number): string
 * 提取字符串的片断，并在新的字符串中返回被提取的部分
 */
// let str = 'hello this is slice';
// let sstr = str.slice(2,5);
// console.log(sstr) // llo

// 14. split
/**
 * string.split(separator,limit?: number)
 * @param separator 字符串或正则表达式，从该参数指定的地方分割
 * @param limit 可选。该参数可指定返回的数组的最大长度。
 */
// let str = "this is split";
// let strArr = str.split(" ");
// let strArr1 = str.split(" ", 2);
// console.log(strArr); // [ 'this', 'is', 'split' ]
// console.log(strArr1); // [ 'this', 'is' ]

// 15. startsWith
/**
 * startsWith(searchString: string, position?: number): boolean
 * 检测字符串是否以指定的子字符串开始
 */
// let str = 'this is startsWith';
// console.log(str.startsWith('th')) // true
// console.log(str.startsWith('t1')) // false

// 16. substr
/**
 * substr(from: number, length?: number): string;
 * 在字符串中抽取从 开始 下标开始的指定数目的字符, 返回一个新的字符串
 */
// let str = "this is substr";
// let str1 = str.substr(2, 5);
// console.log(str); // this is substr
// console.log(str1); // is is

// 17. substring
/**
 * substring(start: number, end?: number): string;)
 * @param end 非负的整数,省略该参数，那么返回的子串会一直到字符串的结尾
 */
// let str = "this is substring";
// let str1 = str.substring(2, 3);
// let str2 = str.substring(2);
// console.log(str); //this is substring
// console.log(str1); // i
// console.log(str2); // is is substring

// 18. toLowerCase toUpperCase
/**
 * toLowerCase 转小写
 * toUpperCase 转大写
 */
// let str = 'This is toLowerCase toUpperCase';
// console.log(str.toLowerCase()) // this is tolowercase touppercase
// console.log(str.toUpperCase()) // THIS IS TOLOWERCASE TOUPPERCASE
// console.log(str)

// 19. trim
/**
 * 去除两边空白，不改变原字符串, 也可使用Left,Start,End,Right去除任意一边的空白
 */

// let str = '   this is  he ';
// console.log(str.trim()) //this is  he
// console.log(str.trimEnd()) //   this is  he
// console.log(str.trimLeft()) //this is  he 
// console.log(str.trimRight()) //   this is  he
// console.log(str.trimStart()) //this is  he 

// 20. valueOf
/**
 * 输出String 对象的原始值
 */
let str = 'hello';
console.log(str.valueOf()) // hello
