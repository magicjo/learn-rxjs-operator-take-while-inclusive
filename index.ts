// RxJS v6+
import { of } from "rxjs";
import { takeWhile } from "rxjs/operators";

/*
 Filtering Operator: takeWhile
 -----------------------------

 Takes values from the source only while they pass the condition given.
 When the first value does not satisfy, it completes.
 ```
 takeWhile(predicate: function(value, index): boolean, inclusive?: boolean): Observable
 ```

 http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-takeWhile
*/

// Emit: 0, 1, 2, 4, 8, 9, 10
const source = of(0, 1, 2, 4, 8, 9, 10);

// Allow values until value from source is greater than 5, then complete
// with inclusive flag, the value causing the predicate to return false will also be emitted
const example = source.pipe(takeWhile(n => n <= 5, true));

// Receive: 0, 1, 2, 4, 8
console.log("[start]");
example.subscribe({
  complete: () => console.log("[complete]"),
  error: err => console.error("[error] : ", err),
  next: value => console.log("[next] : ", value)
});
