import React from "react";

export default function FirstTask() {
    let s1 = '()';
    let s2 = '(())';
    let s3 = '(()))';
    let s4 = '(())}';

    function isValid(s) {
        let stack = [];
        let brackets = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        };

        for (let i = 0; i < s.length; i++) {
            const current = s[i];

            if(isCLosedBracket(current)) {
                if(brackets[current] !== stack.pop()) return false;
            } else {
                stack.push(current)
            }
        }

        return stack.length === 0;
    }
    function isCLosedBracket(char) {
        return [')', '}', ']'].indexOf(char) > -1;
    }
    console.log(s1, isValid(s1))
    console.log(s2, isValid(s2))
    console.log(s3, isValid(s3))
    console.log(s4, isValid(s4))

    return <h1>Hello!</h1>;
}