// 1. modul.js 파일에서 export한 모든 모듈을 가져온다. as 키워드로 이름을 지정한다. 이때 md는 두 개의 함수를 포함하는 객체
// import * as md from "./modul.js";
// md.module("module run");
// md.moduleA("module run");

// 2. modul.js 파일에서 export한 모듈 중 필요한 모듈만 가져온다.
import { module } from "./modul.js";
module("전체 module run")

import {movie} from "../promise_await.js";
movie();

import {totalPoint} from "./myarray.js";
let result = totalPoint();
console.log(result);